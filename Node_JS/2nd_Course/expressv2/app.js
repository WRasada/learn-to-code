var express    = require('express'),
    bodyParser = require('body-parser'),
    app        = express();

var port = process.env.PORT || 3000;
var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function(req, res, next){
  console.log('Request URL: ' + req.url);
  next();
});

app.get('/', function(req, res){
  res.render('index');
});

app.get('/api', function(req, res){
  res.json({name: 'Tod', age: '15'});
});

app.get('/person/:id', function(req, res){
  res.render('person', { ID: req.params.id, Qstr: req.query.qstr })
});

app.post('/person', urlencodedParser, function(req, res){
  res.send('Thank you!');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
});

app.post('/personjson', jsonParser, function(req, res){
  res.send('Thank you for the json data');
  console.log(req.body.firstname);
  console.log(req.body.lastname);
})
app.listen(port);
