
import React, { Component } from 'react';
import { Route } from 'react-router';
import TripContainer  from './containers/TripContainer';
import { AppContainer } from './components/AppContainer';
import { TestView } from './components/TestView';
import { Control_All } from './components/development_parts/Control_All.js';
import './voyager.css';
require('./voyager.css');

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <AppContainer>

            <Route path='/tripcontainer' component={TripContainer} />
            <Route path='/testview' component={TestView} />
            <Route path='./components/development_parts/Control_All.js' component={Control_All} />
      </AppContainer>
    );
  }
}
