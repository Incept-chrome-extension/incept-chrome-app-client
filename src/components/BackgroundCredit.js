import React, { useContext } from 'react';
import { RiExchangeLine, RiUnsplashFill } from 'react-icons/ri';
import DataContext from './contexts/DataContext';

function BackgroundCredit() {
  const data = useContext(DataContext);

  return (
    <div className="bg__credit">
      <p>
        {`© ${data.backgroundImageAuthor}`}
      </p>
      <RiUnsplashFill className="bg__credit__icon" />
      <RiExchangeLine title="Change Background" className="bg__credit__icon" onClick={data.changeBg} />
    </div>
  );
}

export default BackgroundCredit;
