import React, { Component } from 'react';
import { HotelList } from '../components/HotelList';
import ItineraryView  from '../containers/ItineraryView';
import _ from 'lodash';
import { FlightView } from './FlightVIew-not-working-backup';
import { TripScrollView } from './TripScrollView';
import {apiBaseUrl} from './Constants';
import MenuTripListView from './control/Menus/MenuTripListView';
import { CardView } from './CardView';
export class TripView extends Component {


    constructor(props) {
        super(props);
        //this.props.setTripCardDetailLevel(0);
        var cardIn;
         this.state = {
            loading: false,
            changeItin: true,
            changeFlight: true,  
        };

        
    }//Constructor

    // This event updates the state when a hotel is added. THis triggers an ItineraryView and then FlightView update through its props change.
    changingItin() {
        this.setState({ changeItin: !this.state.changeItin }, () => { this.setState({ changeFlight: !this.state.changeFlight }); });

    }//testClick

    changingFlight() {
        this.setState({ changeFlight: !this.state.changeFlight });

    }//changingFlight

    renderView = () => {

        return (
            <span>
                <p>Trip View : </p>
                <MenuTripListView card={this.props.card} hideStagePlaces={false} />
                <ItineraryView userId={this.props.userId} stylePlaceCard={this.props.stylePlaceCard} styleHotelCard={this.props.styleHotelCard} setBuilderCardEvent={this.props.setBuilderCardEvent}  changeItin={this.state.changeItin} changingFlight={this.changingFlight.bind(this)}  />

            </span>
        )//Return;
    }//renderVIew

  

    render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderView();
        return (
            <div>


                {contents}

            </div>
        );//Return
    }//Render
}


