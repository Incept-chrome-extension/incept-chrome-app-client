/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

function Greet(props) {
  const [greet, setGreet] = useState('');

  useEffect(() => {
    if (props.hours < 4 || props.hours > 16) {
      setGreet('Good Evening, Rahul');
    } else if (props.hours >= 4 && props.hours < 12) {
      setGreet('Good Morning, Rahul');
    } else {
      setGreet('Good Afternoon, Rahul');
    }
  }, [props]);

  return (
    <div>
      <p>{greet}</p>
    </div>
  );
}

export default Greet;
