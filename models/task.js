const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  name: { type: String, required: true },
  zone: { type: String, required: true },
  department: { type: String, required: true },
  room: { type: String, required: true },
  severity: { type: Number, required: true },
  note: { type: String, required: true },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now }
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Book;