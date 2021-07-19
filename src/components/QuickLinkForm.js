/* eslint-disable prefer-destructuring */
import React, { useContext, useState } from 'react';
import { IoIosArrowDropup } from 'react-icons/io';
import UserDataContext from './contexts/UserDataContext';

function QuickLinkForm() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const data = useContext(UserDataContext);

  const submitQuicklink = () => {
    if (/\S/.test(name) && /\S/.test(link)) {
      let host;
      if (link.indexOf('http://') === 0 || link.indexOf('https://') === 0) {
        const pathArray = link.split('/');
        host = pathArray[2];
      } else {
        const pathArray = link.split('/');
        host = pathArray[0];
        setLink(`http://${link}`);
      }
      const icon = `https://icons.duckduckgo.com/ip2/${host}.ico`;
      data.addQuickLink(name, link, icon);
    }
  };

  return (
    <div className="quicklink_form_container">
      {
          showForm ? (
            <div className="quicklink_form">
              <IoIosArrowDropup onClick={() => setShowForm(false)} />
              <input className="newquicklinkname" placeholder="Name" onChange={(e) => setName(e.target.value)} />
              <input className="newquicklinklink" placeholder="Link" onChange={(e) => setLink(e.target.value)} />
            </div>
          ) : (
            <></>
          )
        }
      {
          showForm ? (
            <button type="button" className="linkSubmit" onClick={submitQuicklink}>Add Link</button>
          ) : (
            <button type="button" className="linkSubmit" onClick={() => setShowForm(true)}>Add Link</button>
          )
        }
    </div>
  );
}

export default QuickLinkForm;
