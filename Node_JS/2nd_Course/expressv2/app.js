var express    = require('express'),
    bodyParser = require('body-parser'),
    mysql      = require('mysql'),
    mongoose   = require('mongoose'),
    app        = express();

mongoose.connect('mongodb://localhost/express_demo');

var personSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  address: String
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
  firstname: 'John',
  lastname: 'Doe',
  address: '1223 Willard Ave.'
});

john.save(function(err) {
  if (err) throw err;
  console.log('Person saved!');
});

var jane = Person({
  firstname: 'Jane',
  lastname: 'Doe',
  address: '1444 Willard Ave.'
});

jane.save(function(err) {
  if (err) throw err;
  console.log('Person saved!');
});

var port = process.env.PORT || 3000;
var htmlController = require('./controllers/htmlController');
var apiController = require('./controllers/apiController');

app.use('/assets', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function(req, res, next){
  console.log('Request URL: ' + req.url);

  Person.find({}, function(err, users){
    if (err) throw err;
    console.log(users);
  })
  next();
});

htmlController(app);
apiController(app);

app.listen(port);
