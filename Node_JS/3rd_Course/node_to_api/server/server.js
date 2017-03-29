const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ToDoApp');

// let Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });
//
// // let newTodo = new Todo({
// //   text: 'Cook dinner'
// // });
// //
// // newTodo.save().then((todo) => {
// //   console.log('Saved todo', todo);
// // }, (e) => {
// //   console.log('Unable to save todo');
// // });;
//
// let myTodo = new Todo({
//   text: '  Edit this video again   ',
// });
//
// myTodo.save().then((todo) => {
//   console.log(`Saved todo: ${todo}`);
// }, (e) => {
//   console.log(e);
// });

let User = mongoose.model('User', {
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

let Wes = new User({
  email: 'wes@test.com'
});

Wes.save().then((user) => {
  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
