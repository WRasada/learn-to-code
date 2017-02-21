var express = require('express');
var app = express();

var animals = {
  pig: "The pig says 'Oink'",
  cow:  "The cow says 'Moo'",
  dog:  "I'm a dog 'Woof'"
};




app.get('/', function(req, res){
  res.send("Hi there!, welcome to my assignment!");
});

app.get('/speak/:animal', function(req, res){
  var type = req.params.animal.toLowerCase();
  var comment = animals[type];
  if (animals.hasOwnProperty(type)){
    res.send(comment);
  } else {
    res.send("I dont have that animal in my database. =\\");
  }
});

app.get('/repeat/:name/:num', function(req, res){
  var number = req.params.num;
  var name = req.params.name;
  var str = "";

  for (var i = 0; i < number; i++){
    str += name + " ";
  }
  res.send(str);
});

app.get('*', function(req, res){
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function(){
  console.log("Server is Running");
});
