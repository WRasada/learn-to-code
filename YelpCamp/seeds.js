var mongoose   = require('mongoose');
var Campground = require('./models/campground');
var Comment    = require('./models/comment');

var data = [
  {
      name: "Cloud's Rest",
      image: "http://www.americansouthwest.net/california/photographs700/clouds-yosemite2.jpg",
      description: "Blah Blah Blah"
  },
  {
      name: "Desert's Rest",
      image: "http://www.americansouthwest.net/california/photographs700/clouds-yosemite2.jpg",
      description: "Blah Blah Blah"
  },
  {
      name: "Numbani's Rest",
      image: "http://www.americansouthwest.net/california/photographs700/clouds-yosemite2.jpg",
      description: "Blah Blah Blah"
  }
];

function seedDB(){
  //Remove all campgrounds
  Campground.remove({}, function(err){
    if(err){
      console.log(err);
    } else {
      //Add a few campgrounds
      data.forEach(function(seed){
        Campground.create(seed, function(err, campground){
          if(err){
            console.log(err);
          } else {
            console.log("added a campground");
            //create a comment
            Comment.create(
              {
                  text: "This place is great! I wish there was internet",
                  author: "Billy"
              }, function(err, comment){
              if(err){
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment");
              }
            });
          }
        });
      });
      console.log("Removed Campgrounds");
    }
  });

}

module.exports = seedDB;
