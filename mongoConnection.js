//Import the mongoose module
var mongoose = require("mongoose");
const config = require("./config/environment");

mongoose.set("debug", true);
//Set up default mongoose connection
mongoose.connect(config.mongo.uri, config.mongo.options);

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

module.exports = db;
