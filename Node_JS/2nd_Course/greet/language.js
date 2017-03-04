var greetings = require('./greetings.json');

var greet = {
  en: function(){
    console.log(greetings.en);
  },

  es: function(){
    console.log(greetings.es);
  }
}

module.exports = greet;
