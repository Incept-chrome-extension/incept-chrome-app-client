/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import QuickLinkForm from './QuickLinkForm';
import QuickLinks from './QuickLinks';

function QuickLinksContainer() {
  const [collapsed, setCollapsed] = useState(true);
  const [quickLinks, setQuickLinks] = useState('quicklinks__collapsed');

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    if (collapsed === true) {
      setQuickLinks('quicklinks__expanded');
    } else {
      setQuickLinks('quicklinks__collapsed');
    }
  };

  return (
    <div className={quickLinks}>
      <div className="quicklinks__list">
        <p className="quicklinkshead">Links</p>
        <div className="form_links">
          <QuickLinkForm />
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
