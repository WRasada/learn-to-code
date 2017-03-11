const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const userSchema = new Schema({
  name: String,
  postCount: Number
});

const User = mongoose.model('User', userSchema);

module.exports = User;
