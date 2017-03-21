// // Exercise 1
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

// Exercise 2

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

// Exercise 3

var objectLiteral = {
  firstname: 'Tony',
  isAProgrammer: true
}

console.log(JSON.stringify(objectLiteral));

var jsonValue = JSON.parse('{ "firstname": "Tony", "isAProgrammer": true }');

console.log(jsonValue);
