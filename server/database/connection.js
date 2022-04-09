//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
var DBuri = 'mongodb://localhost:27017/placementcell';
// const client = new MongoClient(DBuri);

//Get the default connection
var connectDB = mongoose.connection;
mongoose.connect(DBuri , {useNewUrlParser:true, useUnifiedTopology: true});

//Bind connection to error event (to get notification of connection errors)
connectDB.on('error', console.error.bind(console, 'MongoDB connection error:'));

//console log if the connection is successful
connectDB.once('open',function(){
    console.log('Connected to MongoDb');
});

module.exports = connectDB;