require('./config/config');

const _ = require('lodash');
const express = require('express');
const { ObjectID } = require('mongodb');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');
const { authenticate, isValid } = require('./middleware/authenticate');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/todos', authenticate, (req, res) => {
  Todo.find({_creator: req.user._id}).then((todos) => {
    if (!todos) {
      return res.status(404).send();
    }

    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.post('/todos', authenticate, (req, res) => {
  let todo = new Todo({ text: req.body.text, _creator: req.user._id });

  todo.save().then((todo) => {
    res.send({ todo });
  }, (e) => {
    res.status(400).send(e);
  });
});



app.get('/todos/:id', authenticate, isValid, (req, res) => {
  let id = req.params.id;

  Todo.findOne({ _id: id, _creator: req.user._id }).then((todo) => {
    res.send({todo});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.delete('/todos/:id', authenticate, isValid, (req, res) => {
  let id = req.params.id;

  Todo.findOneAndRemove({ _id: id, _creator: req.user._id }).then((todo) => {
    res.send({ todo });
  }, (e) => {
    res.status(400).send(e);
  })
});

app.patch('/todos/:id', authenticate, isValid, (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, [ 'text', 'completed' ]);

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findOneAndUpdate({ _id, _creator: req.user._id }, { $set: body }, { new: true }).then((todo) => {
    if (!todo) {
      return res.status(404).send();
    }
    res.send({ todo });
  }, (e) => {
    res.status(400).send(e);
  })
});

// POST /users

app.post('/users', (req, res) => {
  let body = _.pick(req.body, ['email', 'password']);
  let user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  });
});

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

// POST /users/login

app.post('/users/login', (req, res) => {
  let body = _.pick(req.body, ['email', 'password']);

  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    })
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }, () => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started server on port: ${port}`);
});


module.exports = { app };
