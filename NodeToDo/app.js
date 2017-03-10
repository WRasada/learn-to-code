var express     = require('express'),
    mongoose    = require('mongoose'),
    bodyParser  = require('body-parser'),
    config      = require('./config'),
    Todos       = require('./models/todoModel'),
    mongoose    = require('mongoose'),
    app         = express();

var port = process.env.PORT || 3000;

mongoose.connect(config.getDbConnectionString());

app.set('view engine', 'ejs');
app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));


app.listen(port);
