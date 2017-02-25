var express = require('express');
var router  = express.Router();
var Campground = require('../models/campground');

//Index - show all campgrounds
router.get('/', function(req, res){
  // Get all campgrounds from DB
  Campground.find({}, function(err, campgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds/index", {campgrounds: campgrounds});
    }
  });
});

//New - show form to create new campground
router.get('/new', function(req, res){
  res.render('campgrounds/new');
});

//Create - create new campground
router.post('/', function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = {name: name, image: image, description: desc};
  Campground.create(newCampground, function(err, newlyCreated){
    if(err){
      console.log(err);
    } else {
      res.redirect('/campgrounds');
    }
  });
});

// SHOWS MORE INFO ABOUT ONE CAMPGROUND
router.get('/:id', function(req, res){
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
    if(err){
      console.log(err);
    } else {
      res.render('campgrounds/show', {campground: foundCampground});
    }
  });
});


module.exports = router;
