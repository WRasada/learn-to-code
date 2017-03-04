// // function statement
// function greet(){
//   console.log('Hi!');
// };
// greet();
//
// // functions are first-class
// function logGreeting(fn){
//   fn();
// };
// logGreeting(greet);
//
// // function expression
// var greetMe = function(){
//   console.log('Hello!');
// };
// greetMe();
//
// logGreeting(greetMe);
//
// logGreeting(function(){
//   console.log("hello world!");
// });

// var greet = require('./greet');

// var person = {
//   firstname: "John",
//   lastname: 'Doe',
//   greet: function() {
//     console.log("Hello, " + this.firstname + ' ' + this.lastname);
//   }
// };
//
// person.greet();

// function constructor
function Person(firstname, lastname){
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.id = 1;

Person.prototype.greet = function(){
  console.log("Hello, " + this.firstname + ' ' + this.lastname);
};

var john = new Person("John", "Doe");

var will = new Person('Will', 'Smith');

will.greet();
john.greet();
console.log(john.id);
john.id = 2;
console.log(john.id);

console.log(john.__proto__);
console.log(will.__proto__);
console.log(john.__proto__ === will.__proto__);
