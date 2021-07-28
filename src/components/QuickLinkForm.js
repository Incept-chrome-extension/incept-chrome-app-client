/* eslint-disable prefer-destructuring */
import React, { useContext, useState } from 'react';
import { IoIosArrowDropup } from 'react-icons/io';
import Toast from '../configurations/ToastConfig';
import { getFavicon } from '../utils/WebSiteFavicon';
import UserDataContext from './contexts/UserDataContext';

function QuickLinkForm() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const data = useContext(UserDataContext);

  const submitQuicklink = (e) => {
    if (/\S/.test(name) && /\S/.test(link)) {
      const icon = getFavicon(link);
      data.addQuickLink(name, link, icon);
      e.target.reset();
      setLink('');
      setName('');
      setShowForm(false);
    } else {
      Toast.showErrorNotification('Please Fill all fields');
      setShowForm(false);
    }
  };

  return (
    <div className="quicklink_form_container">
      {
          showForm ? (
            <div className="quicklink_form">
              <IoIosArrowDropup onClick={() => setShowForm(false)} />
              <form onSubmit={submitQuicklink}>
                <input className="newquicklinkname" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input className="newquicklinklink" placeholder="Link" onChange={(e) => setLink(e.target.value)} />
                <button type="submit" className="linkSubmit">Add Link</button>
              </form>
            </div>
          ) : (
            <button type="button" className="linkSubmit" onClick={() => setShowForm(true)}>Add Link</button>
          )
        }

    </div>
  );
}

export default QuickLinkForm;
