import React, { Component } from 'react';
import { HotelList } from '../components/HotelList';
import ItineraryView  from '../containers/ItineraryView';
import _ from 'lodash';
import { FlightView } from './FlightVIew';
import { TripScrollView } from './TripScrollView';
import {apiBaseUrl} from './Constants';
import MenuTripListView from './control/Menus/MenuTripListView';
export class TripView extends Component {


    constructor(props) {
        super(props);
        //this.props.setTripCardDetailLevel(0);
        var cardIn;
        /*if (props.location.query !== undefined && props.location.query !== null) {
            if (props.location.query.card !== undefined && props.location.query.card !== null) {
                cardIn = props.location.query.card;
                
            }

        }*/
        // tempArray used to fill toggleplace array for toggling place hotels visibilty.
        var tempArray = Array(100).fill(false);
        this.state = {
            itinId: 0,
            loading: true,
            changeItin: true,
            changeFlight: true,
            orderBy: false,
            queryTxt: '',
            item: 0,
            itinCards: [],
            itemNumber: 0
        };

        // Get places api call.
        fetch(apiBaseUrl+'api/Places')
            .then(response => response.json())
            .then(data => {
                this.setState({ places: data, loading: false });
            });

    }//Constructor

    // This event updates the state when a hotel is added. THis triggers an ItineraryView and then FlightView update through its props change.
    changingItin() {
        this.setState({ changeItin: !this.state.changeItin }, () => { this.setState({ changeFlight: !this.state.changeFlight }); });

    }//testClick

    changingFlight() {
        this.setState({ changeFlight: !this.state.changeFlight });

    }//changingFlight

    setItem(itemVal) {
        console.log("logger: In TripView.setItem  item = " + itemVal);
        this.setState({ item: itemVal });
    }

    // Toggle hotels within place visibilty.
    togglePlaceClick = (index) => {
        let tempArr = [...this.state.togglePlace];
        tempArr[index] = !tempArr[index];
        this.setState({ togglePlace: tempArr });
    }//togglePlaceClick

    changeSortOrder() {

        this.setState({ orderBy: !this.state.orderBy });
    }//changeSortOrder

    searchTrigger(e) {
        var str = e.target.value;
        this.setState({ queryTxt: str });
    }//searchTrigger


    renderView = () => {

        return (
            <span>
                <p>Trip View : </p>
                <MenuTripListView />
                <ItineraryView stylePlaceCard={this.props.stylePlaceCard} styleHotelCard={this.props.styleHotelCard} setBuilderCardEvent={this.props.setBuilderCardEvent}  changeItin={this.state.changeItin} changingFlight={this.changingFlight.bind(this)}  />
                <FlightView changeFlight={this.state.changeFlight} userId={this.props.userId} />


            </span>
        )//Return;
    }//renderPlacesHotelVIew

  

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


