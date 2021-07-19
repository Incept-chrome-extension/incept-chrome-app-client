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
      <a href={data.unsplashUrl} style={{ textDecoration: 'none', color: 'whitesmoke' }}>
        <RiUnsplashFill title="Unsplas link" className="bg__credit__icon" />
      </a>
      <RiExchangeLine title="Change Background" className="bg__credit__icon" onClick={data.changeBg} />
    </div>
  );
}

export default BackgroundCredit;
