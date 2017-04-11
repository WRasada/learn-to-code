const { User } = require('./../models/user');
const { ObjectID } = require('mongodb');

let authenticate = (req, res, next) => {
  let token = req.header('x-auth');

  User.findByToken(token).then((user) => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next();
  }).catch((e) => {
    res.status(401).send();
  });
};

let isValid = (req, res, next) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    res.status(404).send('Invalid ID');
  }
  next();
};

module.exports = { authenticate, isValid };
