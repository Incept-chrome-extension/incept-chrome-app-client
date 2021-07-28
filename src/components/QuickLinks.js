import React, { useContext } from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import UserDataContext from './contexts/UserDataContext';

function QuickLinks() {
  const data = useContext(UserDataContext);
  const deleteLink = (initlink) => {
    data.userQuickLinks.forEach((dellink, index) => {
      if (initlink.key === dellink.key) {
        data.userQuickLinks.splice(index, 1);
      }
    });
    data.setQuickLink(data.userQuickLinks);
  };

  return (
    <div className="quicklinks">
      {Array.isArray(data.userQuickLinks) && data.userQuickLinks.map((link, index) => (
        <div className="quicklink_item" key={index}>
          <a rel="external" href={link.link} style={{ textDecoration: 'none', color: 'whitesmoke' }}>

            <div style={{
              display: 'flex', justifyContent: 'left', alignItems: 'center',
            }}
            >
              <span className="favicon__container">
                <img src={link.favicon} alt="favicon" className="quicklink_favicon" />
              </span>
              <p className="link">
                {link.title}
              </p>
            </div>
          </a>

          <AiOutlineDelete className="delete_icon" size={16} onClick={() => deleteLink(link)} />
        </div>
      ))}
    </div>
  );
}

export default QuickLinks;
