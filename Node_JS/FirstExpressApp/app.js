var express = require('express');

var app = express();


// "/" => "Hi there!"
app.get('/', function(req, res){
  res.send("Hi there!");
});
// "/bye" => "Goodbye!"

// "/dog" => "Meow!"


app.listen(3000, function(){
  console.log("Listening on port 3000");
})
