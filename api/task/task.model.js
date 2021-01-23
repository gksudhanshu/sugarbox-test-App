//Require Mongoose
var mongoose = require("mongoose");

//Define a schema
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  task: { type: String },
  assinee: { type: String },
  difficulty: { type: String, default: "easy" }
});

// Compile model from schema
var TaskModel = mongoose.model("task", TaskSchema);
module.exports = TaskModel;
