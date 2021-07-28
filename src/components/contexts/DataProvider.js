/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createApi } from 'unsplash-js';
import DataContext from './DataContext';
import weather from 'openweather-apis';
import { getWeather } from '../../utils/WeatherUtility';

const bgQueris = [
  'snow mountains',
  'green mountains',
  'mountains',
  'jungle',
  'woods',
  'beautiful trails',
  'iceland',
  'waterfall',
  'beautiful waterfall',
  'blue sea',
  'aurora',
  'green jungle'
];

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImageUrl: localStorage.getItem('backgroundImageUrl'),
      backgroundImageAuthor: localStorage.getItem('backgroundImageAuthor'),
      unsplashUrl: localStorage.getItem('unsplashUrl'),
      day: localStorage.getItem('todayDayNumber'),
      weather: JSON.parse(localStorage.getItem('weather'))
    };
  }

  async componentDidMount() {
    const day = new Date();
    if (localStorage.getItem('todayDayNumber') === day.getDay().toString()) {
      this.setState({
        backgroundImageUrl: (localStorage.getItem('backgroundImageUrl')),
        day: day.getDay(),
        weather: JSON.parse(localStorage.getItem('weather')),
      });
    } else {
      this.changeBg();
    }
    this.changeWeather();
  }

  async changeBg() {
    const queryfield = bgQueris[Math.floor(Math.random() * bgQueris.length)];
    const unsplash = createApi({
      accessKey: 'tsztW2OvoW1VwddrbuWGkFHgxwzwG7KyIHVRRz98Mks',
    });

    await unsplash.photos
      .getRandom({
        query: queryfield,
        featured: true,
        orientation: 'landscape',
        count: 1,
      })

      .then(async (res) => {
        const name = res.response[0].user.name;
        const d = new Date();
         this.setState({
          backgroundImageUrl: res.response[0].urls.full,
          backgroundImageAuthor: name,
          unsplashUrl: `https://unsplash.com/photos/${res.response[0].id}`,
          day: d.getDay(),
        });

        localStorage.setItem('backgroundImageAuthor', name);
        localStorage.setItem('backgroundImageUrl', res.response[0].urls.full);
        localStorage.setItem('unsplashUrl', (`https://unsplash.com/photos/${res.response[0].id}`));
        localStorage.setItem('todayDayNumber', d.getDay());
      });
  }

  changeWeather = async () => {
    weather.setAPPID('42b24ff7a15bbbd20e83cba4e261bb4f');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (pos) => {
        weather.setCoordinate(pos.coords.latitude, pos.coords.longitude)
        weather.getAllWeather(function(err, res){
          localStorage.setItem('weather', JSON.stringify(res));
        });
      });
    }
    this.setState({
      weather: JSON.parse(localStorage.getItem('weather'))
    })
  }

  render() {
    const {
      backgroundImageUrl, backgroundImageAuthor, unsplashUrl, day, weather,
    } = this.state;
    const contextValue = {
      backgroundImageUrl,
      unsplashUrl,
      backgroundImageAuthor,
      day,
      changeBg: () => this.changeBg(),
      weather 
    };
    console.log(weather)
    return (
      <DataContext.Provider value={contextValue}>
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataProvider;
