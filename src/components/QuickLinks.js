import React, { useContext } from 'react';
import UserDataContext from './contexts/UserDataContext';

function QuickLinks() {
  const data = useContext(UserDataContext);

  return (
    <div className="todo">
      {Array.isArray(data.quickLinks) && data.userTodos.map((link) => (
        <p className="todo_item">
          •
          {link.title}
        </p>
      ))}
    </div>
  );
}

export default QuickLinks;
