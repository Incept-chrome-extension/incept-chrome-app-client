import React from 'react';

const UserDataContext = React.createContext({
  userTodos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  userQuickLinks: [],
  addQuickLinks: () => {},
  deleteQuickLinks: () => {},
});

export default UserDataContext;
