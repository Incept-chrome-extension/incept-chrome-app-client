import React from 'react';

const UserDataContext = React.createContext({
  userTodos: [],
  addTodo: () => {},
  setTodo: () => {},
  userQuickLinks: [],
  addQuickLink: () => {},
  setQuickLink: () => {},
});

export default UserDataContext;
