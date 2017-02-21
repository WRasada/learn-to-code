var express = require('express');

var app = express();


// "/" => "Hi there!"
app.get('/', function(req, res){
  res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get('/bye', function(req, res){
  res.send("goodbye!");
});
// "/dog" => "Meow!"
app.get('/dog', function(req, res){
  console.log("someone made a request to /dog");
  res.send("Meow!");
});

app.get('/r/:subredditName', function(req, res){
  var subreddit = req.params.subredditName;
  res.send("WELCOME TO THE" + subreddit.toUpperCase() + " SUBREDDIT");
});

app.get('*', function(req, res){
  res.send("You are a star!");
});

app.listen(3000, function(){
  console.log("Listening on port 3000");
})
