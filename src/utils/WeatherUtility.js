import {
  WiCloudy, WiDayFog, WiDayLightning, WiDayRain, WiDayShowers, WiDaySnow, WiDaySunny,
} from 'react-icons/wi';

export const getWeatherIcon = (id) => {
  if (id % 100 === 2) {
    return (
      <div className="weather_icon">
        <WiDayLightning size={40} />
      </div>
    );
  } if (id % 100 === 3) {
    return (
      <div className="weather_icon">
        <WiDayShowers size={40} />
      </div>
    );
  } if (id % 100 === 5) {
    return (
      <div className="weather_icon">
        <WiDayRain size={40} />
      </div>
    );
  } if (id % 100 === 6) {
    return (
      <div className="weather_icon">
        <WiDaySnow size={40} />
      </div>
    );
  } if (id % 100 === 7) {
    return (
      <div className="weather_icon">
        <WiDayFog size={40} />
      </div>
    );
  } if (id === 800) {
    return (
      <div className="weather_icon">
        <WiDaySunny size={40} />
      </div>
    );
  }
  return (
    <div className="weather_icon">
      <WiCloudy size={40} />
    </div>
  );
};
