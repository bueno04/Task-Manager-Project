const { v4: uuidv4 } = require("uuid");
const { readDb, writeDb } = require("../data/db");

function getTasks(req, res) {
  const { tasks } = readDb();
  res.json(tasks.filter((task) => task.createdBy === req.user.id));
}

function getTaskById(req, res) {
  const { tasks } = readDb();
  const task = tasks.find(
    (item) => item.id === req.params.id && item.createdBy === req.user.id
  );
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
}

function createTask(req, res) {
  const { title, description, status, priority } = req.body;
  if (!title || !description) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  const db = readDb();
  const newTask = {
    id: uuidv4(),
    title,
    description,
    status: status || "To Do",
    priority: priority || "Medium",
    createdBy: req.user.id
  };

  db.tasks.push(newTask);
  writeDb(db);
  res.status(201).json(newTask);
}

function updateTask(req, res) {
  const db = readDb();
  const index = db.tasks.findIndex(
    (item) => item.id === req.params.id && item.createdBy === req.user.id
  );

  if (index === -1) return res.status(404).json({ message: "Task not found" });

  const { title, description, status, priority } = req.body;
  db.tasks[index] = {
    ...db.tasks[index],
    title: title ?? db.tasks[index].title,
    description: description ?? db.tasks[index].description,
    status: status ?? db.tasks[index].status,
    priority: priority ?? db.tasks[index].priority
  };

  writeDb(db);
  res.json(db.tasks[index]);
}

function deleteTask(req, res) {
  const db = readDb();
  const index = db.tasks.findIndex(
    (item) => item.id === req.params.id && item.createdBy === req.user.id
  );

  if (index === -1) return res.status(404).json({ message: "Task not found" });

  const removed = db.tasks.splice(index, 1);
  writeDb(db);
  res.json({ message: "Task deleted", task: removed[0] });
}

module.exports = { getTasks, getTaskById, createTask, updateTask, deleteTask };
