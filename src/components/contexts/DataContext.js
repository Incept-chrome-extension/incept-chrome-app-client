import React from 'react';

const DataContext = React.createContext({
  backgroundImageUrl: '',
  backgroundImageAuthor: '',
  unsplashUrl: '',
  day: '',
  changeBg: () => {},
  weather: {},
});

export default DataContext;
