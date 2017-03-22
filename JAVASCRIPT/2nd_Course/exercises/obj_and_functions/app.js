// Objects
//
// var person = new Object();
//
// person['firstname'] = 'Tony';
// person['lastname'] = 'Crostic';
//
// var firstNameProperty = 'firstname';
//
// console.log(person);
// console.log(person[firstNameProperty]);
//
// console.log(person.firstname);
//
//
// person.address = new Object();
//
// person.address.street = '111 Main St.';
// person.address.city = 'New York';
//
// console.log(person);

// Object Literal

// var Tony = {
//   firstname: 'Tony',
//   lastname: 'Crostic',
//   address: {
//     street: '111 Main St.',
//     city: 'New York',
//     state: 'NY'
//   }
// };
//
// function greet(person) {
//   console.log('Hi ' + person.firstname);
// };
//
// greet(Tony);
//
// greet({
//   firstname: 'Mary',
//   lastname: 'Doe'
// });

// JSON and Object Literals

// var objectLiteral = {
//   firstname: 'Tony',
//   isAProgrammer: true
// }
//
// console.log(JSON.stringify(objectLiteral));
//
// var jsonValue = JSON.parse('{ "firstname": "Tony", "isAProgrammer": true }');
//
// console.log(jsonValue);

// Functions are Objects
//
// function greet() {
//   console.log('hi');
// }
//
// greet.language = 'english';
//
// console.log(greet);

// Function Expressions & Function Statements

// function greet() {
//   console.log('hi');
// }
//
// greet();
//
// var anonymousGreet = function() {
//   console.log('hi');
// }
//
// anonymousGreet();
//
// function log(a) {
//   a();
// }
//
// log(function() {
//   console.log('hi');
// });

// // By Value
// var a = 3;
// var b;
//
// b = a;
// a = 2;
//
// console.log(a);
// console.log(b);
//
// // By reference (all objects (including functions))
// var c = { greeting: 'hi' };
// var d;
//
// d = c;
// c.greeting = 'hello';  //mutate
//
// console.log(d);
// console.log(c);
//
// function changeGreeting(obj) {
//   obj.greeting = 'Hola';
// }
//
// changeGreeting(d);
//
// console.log(c);
// console.log(d);

// 'This' keyword

// function a() {
//   console.log(this);
// }
//
// a();
//
// var b = function() {
//   console.log(this);
// }
//
// b();
//
// var c = {
//   name: 'The c object',
//   log: function() {
//     var self = this;
//
//     self.name = 'Updated c object',
//     console.log(self);
//
//     var setName = function(newname) {
//       self.name = newname;
//     }
//     setName('Updated again! the c object');
//     console.log(self);
//   }
// }
//
// c.log();

// 'Arguments' keyword

// function greet(firstname, lastname, language) {
//
//   language = language || 'en';
//
//   if (arguments.length === 0) {
//     console.log('Missing parameters!');
//     console.log('--------------');
//     return;
//   }
//   console.log(firstname);
//   console.log(lastname);
//   console.log(language);
//   console.log(arguments);
//   console.log(arguments[0]);
//   console.log('---------');
// }
//
// greet();
//
// greet('John', 'Doe', 'es');

// Immediately invoked function expression (IIFE)

// // function statement
// function greet(name) {
//   console.log('hello ' + name);
// }
// greet('John');
//
// // function expression
// var greetFunc = function(name) {
//   console.log('hello ' + name);
// }
// greetFunc('John');
//
// // Immediately invoked function expression (IIFE)
// var greeting = function(name) {
//
//   return 'Hello ' + name;
//
// }('John');
//
// console.log(greeting);
//
// var firstname = 'John';
//
// (function(name) {
//   var greeting = 'Hello';
//   console.log(greeting + ' ' + name);
//
// }(firstname)); // IIFE

// .call(), .apply() and .bind()

// var person = {
//   firstname: 'John',
//   lastname: 'Doe',
//   getFullName: function() {
//     var fullname = this.firstname + ' ' + this.lastname;
//     return fullname;
//   }
// }
//
// var logName = function(lang1, lang2) {
//   console.log('Logged: ' + this.getFullName());
//   console.log('Arguments: ' + lang1 + ' ' + lang2);
//   console.log('-----------');
// }
//
// var logPersonName = logName.bind(person);
// logPersonName('en');
//
// logName.call(person, 'en', 'es');
// logName.apply(person, ['en', 'es']);
//
//
// // function borrowing
//
// var person2 = {
//   firstname: 'Jane',
//   lastname: 'Doe'
// }
//
// console.log(person.getFullName.apply(person2));
//
// // function currying
//
// function multiply(a, b) {
//   return a * b;
// }
//
// var multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(4));

// Function Constructors & 'New' & .prototype
//
// function Person(firstname, lastname) {
//   console.log(this);
//   this.firstname = firstname;
//   this.lastname = lastname;
// }
//
// Person.prototype.getFullName = function() {
//   return this.firstname + ' ' + this.lastname;
// }
//
// var john = new Person('John', 'Doe');
//
// console.log(john);
//
// Person.prototype.getFormalFullName = function() {
//   return this.lastname + ', ' + this.firstname;
// }
//
// console.log(john.getFormalFullName());

// var a = new String('John');
//
// console.log(a);
//
// String.prototype.isLengthGreaterThan = function(limit) {
//   return this.length > limit;
// }
//
// console.log('John'.isLengthGreaterThan(3));
//
// Number.prototype.isPositive = function() {
//   return this > 0;
// }
//
// var a = new Number(3);
//
// console.log(a.isPositive());

// Object.create and pure prototypal inheritance
//
// var person = {
//   firstname: 'default',
//   lastname: 'default',
//   greet: function() {
//     return 'Hi ' + this.firstname;
//   }
// }
//
// var john = Object.create(person);
// john.firstname = 'John';
// john.lastname = 'Doe';
// console.log(john);
//
// john.greet();
//
// // polyfill
//
// if(!Object.create) {
//   Object.create = function (o) {
//     if (arguments.length > 1) {
//       throw new Error('Object.create implementation' + ' only accepts the first parameter.');
//     }
//     function F() {}
//     F.prototype = o;
//     return new F();
//   };
// }

// Initialization

// var people = [
//   {
//     firstname: 'John',
//     lastname: 'Doe',
//     addresses: [
//       '111 Main St.',
//       '222 Third St.'
//     ]
//   },
//   {
//     firstname: 'Jane',
//     lastname: 'Doe',
//     addresses: [
//       '333 Main St.',
//       '444 Fifth St.'
//     ],
//     greet: function() {
//       return 'Hello!';
//     }
//   }
// ]
//
// console.log(people);
//
// Strict Mode
function logNewPerson() {
  "use strict";

  var person2;
  persom2 = {};
  console.log(persom2);
}

var person;
persom = {};

console.log(persom);
logNewPerson();
