const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ToDoApp');

let Todo = mongoose.model('Todo', {
  text: {
    type: String,
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

let newTodo = new Todo({
  text: 'Cook dinner'
});

newTodo.save().then((todo) => {
  console.log('Saved todo', todo);
}, (e) => {
  console.log('Unable to save todo');
});;

let myTodo = new Todo({
  text: 'Code for 4 hours',
  completed: true,
  completedAt: 10
});

myTodo.save().then((todo) => {
  console.log(`Saved todo: ${todo}`);
}, (e) => {
  console.log(e);
});
