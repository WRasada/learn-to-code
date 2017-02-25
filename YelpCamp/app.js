var express       = require('express'),
    app           = express(),
    bodyParser    = require('body-parser'),
    localStrategy = require('passport-local'),
    passport      = require('passport'),
    mongoose      = require('mongoose');
    Campground    = require('./models/campground');
    Comment       = require('./models/comment')
    User          = require('./models/user'),
    seedDB        = require('./seeds');

mongoose.connect("mongodb://localhost/yelp_camp")
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
seedDB();

// PASSPORT CONFIGURATION
app.use(require('express-session')({
  secret: "This is the best video game ever",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

app.get('/', function(req, res){
  res.render('landing');
});

app.get('/campgrounds/new', function(req, res){
  res.render('campgrounds/new');
});

app.get('/campgrounds', function(req, res){
  // Get all campgrounds from DB
  Campground.find({}, function(err, campgrounds){
    if(err){
      console.log(err);
    } else {
      res.render("campgrounds/index", {campgrounds: campgrounds});
    }
  });
});

app.post('/campgrounds', function(req, res){
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
app.get('/campgrounds/:id', function(req, res){
  Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
    if(err){
      console.log("Error");
    } else {
      res.render('campgrounds/show', {campground: foundCampground});
    }
  });
});

// ==================
//  COMMENTS ROUTES
// ==================
app.get('/campgrounds/:id/comments/new', isLoggedIn, function(req, res){
  Campground.findById(req.params.id, function(err, campground){
    if(err){
      console.log(err);
    } else {
      res.render('comments/new', {campground: campground});
    }
  })
});

app.post('/campgrounds/:id/comments', isLoggedIn, function(req, res){
    Campground.findById(req.params.id, function(err, campground){
      //lookup campground using ID
      if(err){
        console.log(err);
        res.redirect('/campgrounds');
      } else {
        Comment.create(req.body.comment, function(err, comment){
          if(err){
            console.log(err);
          } else {
            //create new comment
            //connect new comment to campground
            //redirect to campground show page
            campground.comments.push(comment);
            campground.save();
            res.redirect('/campgrounds/' + campground._id);
          }
        })
      }
    });
});

// ===============
//    AUTH ROUTES
// ===============

app.get('/register', function(req, res){
  res.render('register');
});

app.post('/register', function(req, res){
  // var newUser = new User({username: req.body.username});
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if(err){
      console.log(err);
      return res.render('register');
    }
    passport.authenticate("local")(req, res, function(){
      res.redirect('/campgrounds');
    });
  });
});

// show login form
app.get('/login', function(req, res){
  res.render('login');
});

//handling login logic
app.post('/login', passport.authenticate('local',
{
  successRedirect: '/campgrounds',
  failureRedirect: '/login'
}), function(req, res){

});

// Logout Route
app.get('/logout', function(req, res){
  req.logout()
  res.redirect('/campgrounds');
});

function isLoggedIn(req, res, next){
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect('/login');
}

app.listen(3000, function(){
  console.log("Yelp Camp has started on port 3000");
});
