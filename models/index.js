
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifedTopology: true,
    useFindAndModify: true
});

const db = mongoose.connection;

//Set up event for db to print connection
db.once('open', () => {
    console.log(`Connect to MongoDB at ${db.host}:${db.part}`);
});

db.on('error', (error) => {
    console.log(`Database error`, error);
});

//Import all of your models
const User = require('./User');

//Export all the models from this file
module.exports = {
    User,
}