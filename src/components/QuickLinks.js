import React, { useContext } from 'react';
import UserDataContext from './contexts/UserDataContext';

function QuickLinks() {
  const data = useContext(UserDataContext);

  return (
    <div className="quicklinks">
      {Array.isArray(data.userQuickLinks) && data.userQuickLinks.map((link) => (
        <a rel="external" href={link.link} style={{ textDecoration: 'none', color: 'whitesmoke' }}>
          <div className="quicklink_item">
            <img src={link.favicon} alt="favicon" className="quicklink_favicon" />
            <p className="link">
              {link.title}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}

export default QuickLinks;
