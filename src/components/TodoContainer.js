/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import UserDataContext from './contexts/UserDataContext';
import TodoList from './TodoList';

function TodoContainer() {
  const [collapsed, setCollapsed] = useState(true);
  const [todoList, setTodoList] = useState('todoList__collapsed');
  const [input, setInput] = useState('');
  const userData = useContext(UserDataContext);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    if (collapsed === true) {
      setTodoList('todoList__expanded');
    } else {
      setTodoList('todoList__collapsed');
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitTodo = (e) => {
    e.preventDefault();
    userData.addTodo(input);
    setInput('');
    e.target.reset();
  };

  return (
    <div className={todoList}>
      <div className="todoList__toggle">
        {
          collapsed ? (
            <div className="label_icon" onClick={toggleCollapsed}>
              <p>Todos</p>
              <AiOutlineDoubleLeft size={22} />
            </div>
          ) : (
            <AiOutlineDoubleRight size={22} onClick={toggleCollapsed} />
          )

        }
      </div>
      <div className="todoList__list">
        <p className="todoshead">Todos</p>
        <div>
          <form onSubmit={submitTodo}>
            <input className="newtodo" placeholder="New Todo" onChange={handleChange} />
          </form>
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default TodoContainer;
