/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useContext, useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import UserDataContext from './contexts/UserDataContext';
import QuickLinks from './QuickLinks';

function QuickLinksContainer() {
  const [collapsed, setCollapsed] = useState(true);
  const [quickLinks, setQuickLinks] = useState('quicklinks__collapsed');
  const [input, setInput] = useState('');
  const userData = useContext(UserDataContext);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    if (collapsed === true) {
      setQuickLinks('quicklinks__expanded');
    } else {
      setQuickLinks('quicklinks__collapsed');
    }
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitQuicklink = (e) => {
    e.preventDefault();
    userData.addTodo(input);
    setInput('');
    e.target.reset();
  };

  return (
    <div className={quickLinks}>
      <div className="quicklinks__list">
        <p className="quicklinkshead">Links</p>
        <div>
          <form onSubmit={submitQuicklink}>
            <input className="newquicklinkname" placeholder="Name" onChange={handleChange} />
            <input className="newquicklinklink" placeholder="Link" onChange={handleChange} />
          </form>
          <QuickLinks />
        </div>
      </div>
      <div className="quicklinks__toggle">
        {
          collapsed ? (
            <div className="label_icon" onClick={toggleCollapsed}>
              <p>Links</p>
              <AiOutlineDoubleRight size={22} />
            </div>
          ) : (
            <AiOutlineDoubleLeft size={22} onClick={toggleCollapsed} />
          )
        }
      </div>
    </div>
  );
}

export default QuickLinksContainer;
