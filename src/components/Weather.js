import React, { useContext } from 'react';
import { getWeatherIcon } from '../utils/WeatherUtility';
import DataContext from './contexts/DataContext';

function Weather() {
  const data = useContext(DataContext);
  console.log(data.weather);
  return (
    <div className="weather">
      <div className="weather_temp">
        {getWeatherIcon(data.weather.weather[0].id)}
        <p className="weather_temp">{`${data.weather.main.temp}°C`}</p>
      </div>
      <p className="weather_location">{data.weather.name}</p>
    </div>
  );
}

export default Weather;
