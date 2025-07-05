const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://Prashlesh:kishan@learning.pdxzcaa.mongodb.net/User_app?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = { todo };

