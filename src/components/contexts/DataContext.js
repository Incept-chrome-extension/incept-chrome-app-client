import React from 'react';

const DataContext = React.createContext({
  backgroundImageUrl: '',
  backgroundImageAuthor: '',
  unsplashLink: '',
  day: '',
  changeBg: () => {},
});

export default DataContext;
