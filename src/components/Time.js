import React, { useState, useEffect } from 'react';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { HiDotsHorizontal } from 'react-icons/hi';
import { format } from '../utils/TimeUtil';
import Greet from './Greet';

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
      <div className="time__time">
        <AiOutlineClockCircle size={30} className="time_icon" />
        <div className="time__text">
          {`${hours}:${minutes}`}
        </div>
        <HiDotsHorizontal size={30} className="time_icon" />
      </div>
      <div className="greet">
        <Greet hours={hours} />
      </div>
    </div>
  );
}

export default Time;
