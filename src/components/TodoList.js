/* eslint-disable */
import React, { useContext } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import Toast from '../configurations/ToastConfig';
import UserDataContext from './contexts/UserDataContext';

function TodoList() {
  const data = useContext(UserDataContext);

  const toggleDone = (newTodo) => {
    data.userTodos.forEach((todo) => {
      if (todo.key === newTodo.key) {
        todo.done = !todo.done;
        if (todo.done) {
          Toast.showSuccessNotification('Way to Go!');
        }
      }
    });
    data.setTodo(data.userTodos);
  };

  const deleteTodo = (deltodo) => {
    data.userTodos.forEach((todo, index) => {
      if (todo.key === deltodo.key) {
        data.userTodos.splice(index, 1);
      }
    });

    console.log(data);
    data.setTodo(data.userTodos);
  };

  console.log(data);
  return (
    <div className="todo">
      {Array.isArray(data.userTodos) && data.userTodos.map((todo, index) => (
        <div className="todo_item" onClick={() => toggleDone(todo)}>
          <div className="todo_title">
            {
                todo.done ? (
                  <p style={{ textDecorationLine: 'line-through' }} key={index}>{todo.title}</p>
                ) : (
                  <p key={index}>{todo.title}</p>
                )
              }

          </div>
          <div className="todo_remove_icon">
            {
                todo.done ? (
                  <AiOutlineDelete size={16} onClick={() => deleteTodo(todo)} />
                ) : (<></>)
              }
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
