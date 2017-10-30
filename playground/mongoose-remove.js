const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((result) => {
//   console.log(result);
// });


// Todo.findOneAndRemove()

// Todo.findByIdAndRemove

Todo.findOneAndRemove({ _id: '59f6dea9ea3c28496ba9342e' }).then((todo) => {

});

Todo.findByIdAndRemove('59f6dea9ea3c28496ba9342e').then((todo) => {
  console.log(todo);
});