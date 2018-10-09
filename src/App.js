import React, { Component } from 'react';
import { Route } from 'react-router';
import TripContainer  from './containers/TripContainer';
import { AppContainer } from './components/AppContainer';
import { TestView } from './components/TestView';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCircle, faHeart, faShareAlt, faMapMarkerAlt, faHome, faPlus, faMinus, faTimes, faSortAlphaDown, faSearch, faMapMarked, faMap, faAngleUp, faAngleDown, faCar, faBus, faGripHorizontal } from '@fortawesome/free-solid-svg-icons';


library.add(fab, faCircle, faHeart, faShareAlt, faMapMarkerAlt, faHome, faPlus, faMinus, faTimes, faSortAlphaDown, faSearch, faMapMarked, faMap, faAngleUp, faAngleDown, faCar, faBus, faGripHorizontal);

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
