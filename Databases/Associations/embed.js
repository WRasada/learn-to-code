var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/blog_demo");

// POST - title, content

var postSchema = new mongoose.Schema({
  title: String,
  content: String
});

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

var Post = mongoose.model("Post", postSchema);

// var newUser = new User({
//   email: "willow@hogwarts.edu",
//   name: "Willow Brown"
// });
//
// newUser.posts.push({
//   title: "How to brew polyjuice potion",
//   content: "Just kidding. Go to potions class"
// })
//
// newUser.save(function(err, user){
//   if(err){
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// var newPost = new Post({
//   title: "Reflections on Apples",
//   content: "They are delicious"
// });
//
// newPost.save(function(err, post){
//   if (err){
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({name: "Willow Brown"}, function(err, user){
  if (err) {
    console.log(err);
  } else {
    user.posts.push({
      title: "Harry Potter",
      content: "Voldemort is scary"
    });
    user.save(function(err, user){
      if(err){
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});
