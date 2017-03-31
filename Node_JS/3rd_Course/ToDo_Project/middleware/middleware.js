const { ObjectID } = require('mongodb');

let middleware = {};

middleware.isValid = (req, res, next) => {
  let id = req.params.id;

  if (!ObjectID.isValid(id)) {
    return res.status(404).send('Invalid ID');
  }
  next();
};

module.exports = middleware;
