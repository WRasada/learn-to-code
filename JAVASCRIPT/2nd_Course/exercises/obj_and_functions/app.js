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

function greet() {
  console.log('hi');
}

greet();

var anonymousGreet = function() {
  console.log('hi');
}

anonymousGreet();

function log(a) {
  a();
}

log(function() {
  console.log('hi');
});
