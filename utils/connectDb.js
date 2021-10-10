const mongoose = require('mongoose');
const { database } = require('../config');

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

function connectDb(){
  console.log('Connecting to database...');
  return mongoose.connect(
    `mongodb+srv://${database.userName}:${database.password}@${database.host}/${database.databaseName}?retryWrites=true`,
    options,
  );
}

module.exports = connectDb;