const {
  getAllTodos,
  getTodoById,
  deleteTodoById,
  updateTodoById,
  createTodo,
} = require('../todos');

test('Get all todos', async () => {
  expect(getAllTodos()).toEqual([
    {
      id: 1,
      title: 'Learn Node.js',
      completed: true,
      month: 5,
    },
    {
      id: 2,
      title: 'Learn React.js',
      completed: false,
      month: 5,
    },
  ]);
});

test('Find todo by id', async () => {
  expect(getTodoById(1)).toEqual({
    id: 1,
    title: 'Learn Node.js',
    completed: true,
    month: 5,
  });
});

test('Update todo by id', async () => {
  const newData = {
    title: 'Learn JavaScript',
    completed: false,
    month: 3,
  };

  expect(updateTodoById(1, newData)).toEqual([
    {
      id: 1,
      title: 'Learn JavaScript',
      completed: false,
      month: 3,
    },
    {
      id: 2,
      title: 'Learn React.js',
      completed: false,
      month: 5,
    },
  ]);
});

test('Delete todo by id', async () => {
  expect(deleteTodoById(1)).toEqual([
    {
      id: 2,
      title: 'Learn React.js',
      completed: false,
      month: 5,
    },
  ]);
});

test('Create todo', async () => {
  expect(createTodo('Learn TypeScript')).toEqual([
    {
      id: 2,
      title: 'Learn React.js',
      completed: false,
      month: 5,
    },
    {
      id: 3,
      title: 'Learn TypeScript',
      completed: false,
      month: 5,
    },
  ]);
});
