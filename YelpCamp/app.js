var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongoose    = require('mongoose');

mongoose.connect("mongodb://localhost/yelp_camp")
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//    name: "Big Bear",
//    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcROHlfB8JwDuedX6Mvmj8SBybiutFuPiThIyGhwYkqYczz-EZJ6"
//    }, function(err, campground){
//    if(err){
//      console.log(err);
//    } else {
//      console.log("New Created Campground: ")
//      console.log(campground);
//    }
//    });

app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds/new', function(req, res){
  res.render('new');
});

app.get('/campgrounds', function(req, res){
  // Get all campgrounds from DB
  Campground.find({}, function(err, campgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds", {campgrounds: campgrounds});
    }
  });
});

app.post('/campgrounds', function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      res.redirect('/campgrounds');
    }
  });
});

app.listen(3000, function(){
  console.log("Yelp Camp has started on port 3000");
});
