var express               = require('express'),
    mongoose              = require('mongoose'),
    bodyParser            = require('body-parser'),
    passport              = require('passport'),
    localStrategy         = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose'),
    User                  = require('./models/user');

mongoose.connect('mongodb://localhost/auth_demo_app');


var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(require('express-session')({
  secret: "coding is the best and fun",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.set('view engine', 'ejs');
// ================
//     Routes
// ================

  app.get('/', function(req, res){
    res.render('home');
  });

  app.get('/secret', function(req, res){
    res.render('secret');
  });

// ================
//  Auth Routes
// ================

// show signup form
app.get('/register', function(req, res){
  res.render("register");
});

app.post('/register', function(req, res){
  req.body.username
  req.body.password
  User.register(new User({username: req.body.username}), req.body.password, function(err, user){
    if(err){
      console.log(err);
      return res.render('register');
    } else {
      passport.authenticate('local')(req, res, function(){
        res.redirect('/secret');
      });
    }
  });
});


  app.listen(3000, function(){
    console.log("Server has started");
  });
