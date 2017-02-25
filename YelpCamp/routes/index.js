var express  = require('express');
var router   = express.Router();
var passport = require('passport');
var User     = require('../models/user');

// Root route
router.get('/', function(req, res){
  res.render('landing');
});

// Register Form
router.get('/register', function(req, res){
  res.render('register');
});

// SignUp Logic
router.post('/register', function(req, res){
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
router.get('/login', function(req, res){
  res.render('login');
});

// handling login logic
router.post('/login', passport.authenticate('local',
{
  successRedirect: '/campgrounds',
  failureRedirect: '/login'
}), function(req, res){

});

// Logout Route
router.get('/logout', function(req, res){
  req.logout()
  res.redirect('/campgrounds');
});


module.exports = router;