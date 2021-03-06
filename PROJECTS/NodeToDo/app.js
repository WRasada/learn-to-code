var express     = require('express'),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser'),
    config      = require('./config'),
    Todos       = require('./models/todoModel'),
    mongoose    = require('mongoose'),
    app         = express();

var setupController = require('./controllers/setupController');
var apiController   = require('./controllers/apiController');
var port = process.env.PORT || 3000;



mongoose.connect(config.getDbConnectionString());

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));

setupController(app);
apiController(app);

app.listen(port);
