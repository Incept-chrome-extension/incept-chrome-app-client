import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

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

Greet.propTypes = {
  hours: PropTypes.node.isRequired,
};

export default Greet;
