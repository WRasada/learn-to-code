const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

User.findById('58db092d67d6e00a876def20').then((user) => {
  if (!user) {
    return console.log('Unable to find user');
  }

  console.log(user);
}).catch((e) => console.log(e));

// let id = '58db23d5434d191217ae464a11';
//
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
// //
// // Todo.find({
// //   _id: id
// // }).then((todos) => {
// //   console.log(todos);
// // });
// //
// // Todo.findOne({
// //   _id: id
// // }).then((todo) => {
// //   console.log(todo);
// // });
//
// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('ID not found');
//   }
//   console.log(todo);
// }).catch((e) => console.log(e));
