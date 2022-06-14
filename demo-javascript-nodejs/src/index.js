const express = require('express');
const app = express();
const {
  getAllTodos,
  getTodoById,
  createTodo,
  deleteTodoById,
  updateTodoById,
} = require('./todos');

app.get('/', function (req, res) {
  res.send(JSON.stringify(getAllTodos(), null, 4));
});

app.get('/:id', function (req, res) {
  console.log(req.params.id);
  res.send(JSON.stringify(getTodoById(req.params.id), null, 4));
});

app.get('/create/:title', function (req, res) {
  res.send(JSON.stringify(createTodo(req.params.title), null, 4));
});

app.get('/delete/:id', function (req, res) {
  res.send(JSON.stringify(deleteTodoById(req.params.id), null, 4));
});

app.listen(3000, function () {
  console.log('Server running on port 3000');
});
