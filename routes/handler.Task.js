const Student = require("../models/student_model");
const router = require("express").Router();

router.route("/student").get((req, res) => {
  Student.find()
    .then((student) => res.status(200).json(student))
    .catch((err) => res.status(400).json(err));
});

router.route("/student").post((req, res) => {
  const student = req.body;
  const id = student.id;
  const rollno = student.rollno;
  const name = student.name;
  const age = student.age;

  const newStudent = new Student({
    id: id,
    rollno: rollno,
    name: name,
    age: age,
  });

  newStudent
    .save()
    .then(() => res.status(200).json("Successful !!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/student").put((req, res) => {
  const receivedStudent = req.body;

  const filter = { id: receivedStudent.id };

  const replacementDocument = receivedStudent;

  Student.replaceOne(filter, replacementDocument)
    .then(() => {
      res.status(200).json("Successful");
    })
    .catch((err) => res.status(400).json(err));
});

router.route("/student").delete((req, res) => {
  const studentToBeDeleted = req.body;

  Student.deleteOne({
    id: studentToBeDeleted.id,
    rollno: studentToBeDeleted.rollno,
    name: studentToBeDeleted.name,
    age: studentToBeDeleted.age,
  })
    .then((result) => {
      if (result.deletedCount === 1) res.status(200).json("Successful");
      else res.status(404).json(result);
    })
    .catch((err) => res.status(400).json(err));
});

router.route("");
module.exports = router;
