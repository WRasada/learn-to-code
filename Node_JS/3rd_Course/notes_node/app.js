console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _  = require('lodash');
const notes = require('./notes');

// console.log(_.isString(true));
// console.log(_.isString('Wes'));
let filteredArray = _.uniq([1, 2, 3, 4, 1, 'Wes', 'Wes', 'Andrew']);
console.log(filteredArray);
// var res = notes.addNote();
// console.log(res);
//
// var res2 = notes.add(3, 4);
// console.log(res2);

// let user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
