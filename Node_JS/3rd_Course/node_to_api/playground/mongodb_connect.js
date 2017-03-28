const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  db.collection('Users').insertOne({
    name: 'Wesley',
    age: 27,
    location: 'Post Falls, ID'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to insert user', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2));
  });

  db.close();
});
