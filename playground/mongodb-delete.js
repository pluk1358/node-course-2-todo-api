// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  db.collection('Users').deleteMany({name: 'Andrew'});

  // deleteOne
  db.collection('Users').findOneAndDelete({_id: new ObjectID('59f56a4955657243f80a4aa9')}).then((result) => {
    console.log(JSON.stringify(result, undefined, 2)); 
  });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});