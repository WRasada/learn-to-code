var express               = require('express'),
    mongoose              = require('mongoose'),
    bodyParser            = require('body-parser'),
    passport              = require('passport'),
    localStrategy         = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    User                  = require('./models/user');

mongoose.connect('mongodb://localhost/auth_demo_app');


var app = express();

app.use(require('express-session')({
  secret: "coding is the best and fun",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serialize(User.serializeUser());
passport.deserialize(User.deserializeUser());

  app.set('view engine', 'ejs');

  app.get('/', function(req, res){
    res.render('home');
  });

  app.get('/secret', function(req, res){
    res.render('secret');
  });

  app.listen(3000, function(){
    console.log("Server has started");
  });
