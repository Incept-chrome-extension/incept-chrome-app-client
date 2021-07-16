/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import UserDataContext from './contexts/UserDataContext';

function TodoList() {
  const data = useContext(UserDataContext);

  console.log(data)
  return (
    <div className="todo">
      {Array.isArray(data.userTodos) && data.userTodos.map((todo,index) => {
        return (
          <p className="todo_item" key={index}>• {todo.title}</p>
        )
      })}
    </div>
  );
}

export default TodoList;
