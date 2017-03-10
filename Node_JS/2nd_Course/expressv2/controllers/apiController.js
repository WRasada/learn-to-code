var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app) {

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


};
