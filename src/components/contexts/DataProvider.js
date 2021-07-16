/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createApi } from 'unsplash-js';
import DataContext from './DataContext';

const bgQueris = [
  'Mountains',
  'animals',
  'Nature',
  'snow',
  'alberta',
  'switzerland',
  'water',
  'california',
  'italy',
  'view',
];

class DataProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundImageUrl: localStorage.getItem('backgroundImageUrl'),
      backgroundImageAuthor: localStorage.getItem('backgroundImageAuthor'),
      unsplashUrl: localStorage.getItem('unsplashUrl'),
      day: localStorage.getItem('todayDayNumber'),
    };
  }

  async componentDidMount() {
    const day = new Date();
    if (localStorage.getItem('todayDayNumber') === day.getDay().toString()) {
      this.setState({
        backgroundImageUrl: (localStorage.getItem('backgroundImageUrl')),
        day: day.getDay(),
      });
    } else {
      this.changeBg();
    }
  }

  async changeBg() {
    const queryfield = bgQueris[Math.floor(Math.random() * bgQueris.length)];
    const unsplash = createApi({
      accessKey: 'tsztW2OvoW1VwddrbuWGkFHgxwzwG7KyIHVRRz98Mks',
    });

    await unsplash.photos
      .getRandom({
        query: queryfield,
        orientation: 'landscape',
        count: 1,
      })

      .then(async (res) => {
        const name = res.response[0].user.name;
        const d = new Date();
        await this.setState({
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

  render() {
    const {
      backgroundImageUrl, backgroundImageAuthor, unsplashUrl, day,
    } = this.state;
    const contextValue = {
      backgroundImageUrl,
      unsplashUrl,
      backgroundImageAuthor,
      day,
      changeBg: () => this.changeBg(),
    };

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
