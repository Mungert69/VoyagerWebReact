
import React, { Component } from 'react';
import { Route } from 'react-router';
import TripContainer from './containers/TripContainer';
import { AppContainer } from './components/AppContainer';
import { TestView } from './components/TestView';

import './voyager.css';
require('./voyager.css');

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <AppContainer>
      </AppContainer>
    );
  }
}
