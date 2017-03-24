console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

var res = notes.addNote();
console.log(res);

var res2 = notes.add(3, 4);
console.log(res2);

// let user = os.userInfo();
//
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`);
