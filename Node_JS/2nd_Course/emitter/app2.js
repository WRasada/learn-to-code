var Emitter = require('./emitter');

var emtr = new Emitter();

emtr.on('greet', function(){
  console.log("Somewhere, someone said hello!");
});

emtr.on('greet', function(){
  console.log("A greeting occured!");
});

emtr.on('hello', function(){
  console.log("Hey buddy!");
})

console.log('Hello');
emtr.emit('greet');
emtr.emit('hello');
