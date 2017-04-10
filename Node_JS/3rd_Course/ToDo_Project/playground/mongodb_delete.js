// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to the MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((result) => {
  //   console.log(result);
  // });
  // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((result) => {
  //   console.log(result);
  // });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({ name: 'Wesley' }).then((result) => {
  //   console.log(result);
  // });
  //
  db.collection('Users').findOneAndDelete({ _id: new ObjectID('58d9e2278eb645822b0810cf')}).then((result) => {
    console.log(result);
  });
  // db.close();
});
