import React from 'react';

const DataContext = React.createContext({
  backgroundImageUrl: '',
  day: '',
  changeBg: () => {},
});

export default DataContext;
/* Todo:
    Add following:
      1. date
      2. theme imp
*/
