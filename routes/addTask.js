const Task = require("../models/tasks_model");
const router = require("express").Router();

router.route("/").get((req, res) => {
  Task.find()
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json(err));
});

router.route("/add").post((req, res) => {
  const task = req.body;
  const taskName = task.taskName;
  const taskDesc = task.taskDesc;
  const completed = task.completed;

  const newTask = new Task({ taskName, taskDesc, completed });

  newTask
    .save()
    .then(() => res.json("Task Added !!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
