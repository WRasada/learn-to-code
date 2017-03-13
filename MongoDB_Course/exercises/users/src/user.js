const mongoose = require('mongoose');
const postSchema = require('./post');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
  name: {
    type: String,
    validate: {
      validator: (name) => name.length > 2,
      message: 'Name must be longer than 2 characters.'
    },
    required: [true, 'Name is required.']
  },
  blogPosts: [{
    type: Schema.Types.ObjectId,
    ref: 'BlogPost'
  }],
  posts: [postSchema],
  likes: Number
});

userSchema.virtual('postCount').get(function() {
  return this.posts.length;
});

userSchema.pre('remove', function(next) {
  const BlogPost = mongoose.model('BlogPost');
  BlogPost.remove({ _id: { $in: this.blogPosts } })
    .then (() => next());
});

const User = mongoose.model('User', userSchema);

module.exports = User;
