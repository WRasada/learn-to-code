var Emitter = require("events");
var eventConfig = require("./config").events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function(){
  console.log("Somewhere, someone said hello!");
});

emtr.on(eventConfig.GREET, function(){
  console.log("A greeting occured!");
});

emtr.on(eventConfig.HELLO, function(){
  console.log("Hey buddy!");
})

console.log('Hello');
emtr.emit(eventConfig.GREET);
emtr.emit(eventConfig.HELLO);
