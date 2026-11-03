//Create an Express API for task management with GET and POST  endpoints
const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

const tasks = [];
let nextId = 1;

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const title = req.body?.title?.trim();

  if (!title) {
    return res.status(400).json({ error: "A task title is required." });
  }

  const task = { id: nextId++, title, completed: false };
  tasks.push(task);

  res.status(201).json(task);
});

app.listen(port, () => {
  console.log(`Task API listening on port ${port}`);
});