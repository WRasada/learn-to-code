require('./config/config');

const _ = require('lodash');
const express = require('express');
const { ObjectID } = require('mongodb');
const bodyParser = require('body-parser');

const middleware = require('./middleware/middleware');
const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    if (!todos) {
      return res.status(404).send();
    }

    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.post('/todos', (req, res) => {
  let todo = new Todo({ text: req.body.text });

  todo.save().then((todo) => {
    res.send({ todo });
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos/:id', middleware.isValid, (req, res) => {
  let id = req.params.id;

  Todo.findById(id).then((todo) => {
    res.send({todo});
  }, (e) => {
    res.status(400).send(e);
  });
});

app.delete('/todos/:id', middleware.isValid, (req, res) => {
  let id = req.params.id;

  Todo.findByIdAndRemove(id).then((todo) => {
    res.send({ todo });
  }, (e) => {
    res.status(400).send(e);
  })
});

app.patch('/todos/:id', middleware.isValid, (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, [ 'text', 'completed' ]);

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
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

  user.save().then((user) => {
    res.send({ user });
  }, (e) => {
    res.status(400).send(e);
  });
});


app.listen(port, () => {
  console.log(`Started server on port: ${port}`);
});


module.exports = { app };
