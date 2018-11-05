import React, { Component } from 'react';
import { Route } from 'react-router';
import TripContainer  from './containers/TripContainer';
import { AppContainer } from './components/AppContainer';
import { TestView } from './components/TestView';
import './voyager.css';
require('./voyager.css');

export default class App extends Component {
  displayName = App.name

  render() {
    return (
        <AppContainer>

            <Route path='/tripcontainer' component={TripContainer} />
            <Route path='/testview' component={TestView} />
           
      </AppContainer>
    );
  }
}
