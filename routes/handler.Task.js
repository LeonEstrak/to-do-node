const Task = require("../models/tasks_model");
const router = require("express").Router();

router.route("/todo").get((req, res) => {
  Task.find()
    .then((task) => res.status(200).json(task))
    .catch((err) => res.status(400).json(err));
});

router.route("/todo").post((req, res) => {
  const task = req.body;
  const id = task.id;
  const message = task.message;
  const completed = task.completed;

  const newTask = new Task({ id: id, message: message, completed: completed });

  newTask
    .save()
    .then(() => res.status(200).json("Successful !!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/todo").put((req, res) => {
  const receivedtask = req.body;

  const filter = { id: receivedtask.id };

  const replacementDocument = receivedtask;

  Task.replaceOne(filter, replacementDocument)
    .then(() => {
      res.status(200).json("Successful");
    })
    .catch((err) => res.status(400).json(err));
});

router.route("/todo").delete((req, res) => {
  const taskToBeDeleted = req.body;

  Task.deleteOne({
    id: taskToBeDeleted.id,
    message: taskToBeDeleted.message,
    completed: taskToBeDeleted.completed,
  })
    .then((result) => {
      if (result.deletedCount === 1) res.status(200).json("Successful");
      else res.status(404).json(result);
    })
    .catch((err) => res.status(400).json(err));
});

router.route("");
module.exports = router;
