import React from 'react';
import LeftBody from './LeftBody';
import RightBody from './RightBody';
import './styles/Body.css';

function Body() {
  return (
    <div className="body">
      <LeftBody />
      <RightBody />
    </div>
  );
}

export default Body;
