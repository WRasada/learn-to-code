'use strict';

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hello, " + this.firstname + ' ' + this.lastname);
  }
}

var john = new Person("John", "Doe");

var will = new Person('Will', 'Smith');

will.greet();
john.greet();

console.log(john.__proto__);
console.log(will.__proto__);
console.log(john.__proto__ === will.__proto__);
