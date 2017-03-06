'use strict';

var Greetr = require('./greetr')
var EventEmitter = require('events');

var greeter1 = new Greetr();

greeter1.on('greet', function(data){
  console.log("Someone greeted!: " + data);
});

greeter1.greet('Tony');
