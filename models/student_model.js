const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  rollno: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: mongoose.Number, required: true },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
