var express = require('express'),
    app     = express();

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.send("Hello");
});

app.get('/api', function(req, res){
  res.json({name: 'Tod', age: '15'});
});

app.get('/person/:id', function(req, res){
  res.send(`Hello ${req.params.id}!`)
});

app.listen(port);
