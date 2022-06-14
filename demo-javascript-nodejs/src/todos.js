// Global Scope & Hoisting
const todos = [
  {
    id: 1,
    title: 'Learn Node.js',
    completed: true,
    month: new Date().getMonth(),
  },
  {
    id: 2,
    title: 'Learn React.js',
    completed: false,
    month: new Date().getMonth(),
  },
];

// Function Scope
function getAllTodos() {
  return todos;
}

function getTodoById(id) {
  const todo = todos.find((todo) => todo.id === +id); //coercion
  return todo;
}

function deleteTodoById(id) {
  const index = todos.findIndex((todo) => todo.id === +id);
  if (index > -1) {
    todos.splice(index, 1);
    return todos;
  }
  return todos;
}

function updateTodoById(id, newTodoData) {
  const index = todos.findIndex((todo) => todo.id === +id);
  todos[index] = { ...todos[index], ...newTodoData };
  return todos;
}

function createTodo(title) {
  const newTodo = {
    id: todos[todos.length - 1].id + 1,
    title,
    completed: false,
    month: new Date().getMonth(),
  };
  todos.push(newTodo);
  return todos;
}

module.exports = {
  getAllTodos,
  getTodoById,
  deleteTodoById,
  updateTodoById,
  createTodo,
};
