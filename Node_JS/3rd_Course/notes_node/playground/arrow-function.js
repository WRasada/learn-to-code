let square = (num) => num * num;

console.log(square(9));

let user = {
  name: 'Wes',
  sayHi: () => {
    console.log(arguments[1]);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt () {
    console.log(arguments[1]);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);
