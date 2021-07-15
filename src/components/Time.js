import React, { useState, useEffect } from 'react';
import { format } from '../utils/TimeUtil';

function Time() {
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();

  useEffect(() => {
    setHours(format(new Date().getHours()));
    setMinutes(format(new Date().getMinutes()));
    const id = setInterval(() => {
      const now = new Date();
      const h = format(now.getHours());
      const m = format(now.getMinutes());
      setHours(h);
      setMinutes(m);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [hours, minutes]);

  return (
    <div style={{ color: 'white' }} className="time">
      {`${hours}:${minutes}`}
      <div className="greet">
        Good Morning
      </div>
    </div>
  );
}

export default Time;
