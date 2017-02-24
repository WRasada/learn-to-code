var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blog_demo_2");

// POST - title, content

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    }
  ]
});

var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

// User.create({
//   email: "Bob@gmail.com",
//   name: "Bob Saget"
// });

//
// Post.create({
//   title: "How to cook meat Pt. 3",
//   content: "Cook on stove and flip it"
// }, function(err, post){
//   User.findOne({email: "Bob@gmail.com"}, function(err, foundUser){
//     if(err){
//       console.log(err);
//     } else {
//       foundUser.posts.push(post);
//       foundUser.save(function(err, data){
//         if(err){
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       });
//     }
//   });
// });

// Find user
User.findOne({email: "Bob@gmail.com"}).populate("posts").exec(function(err, user){
  if(err){
    console.log(err);
  } else {
    console.log(user);
  }
});
// find all posts for that user
