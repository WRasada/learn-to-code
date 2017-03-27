const express = require('express');
const hbs     = require('hbs');

const app     = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('home', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Welcome to my Site!'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
  });
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'Unable to fulfill this request'
  });
});




app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
