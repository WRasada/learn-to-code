var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
})

var Todos = mongoose.model('Todos', todoSchema);

module.exports = Todos;
