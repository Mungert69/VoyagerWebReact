import React, { Component } from 'react';
import { HotelList } from '../components/HotelList';
import ItineraryView  from '../containers/ItineraryView';
import _ from 'lodash';
import { FlightView } from './FlightVIew';
import { TripScrollView } from './TripScrollView';
import {apiBaseUrl} from './Constants';
import { Control_Menu_3_1_Trip } from './control/Control_Menu_3_1_Trip';
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
            togglePlace: tempArray,
            places: [],
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


    renderPlaceHotelView = (places) => {

        var orderDir = this.state.orderBy ? 'desc' : 'asc';
        var filteredPlaces = [];
        var queryTxt = this.state.queryTxt;

        places = _.orderBy(places, ['placeName'], [orderDir]);

        places.forEach(function (item) {
            if (item.placeName.toLowerCase().indexOf(queryTxt.toLowerCase()) !== -1) {
                filteredPlaces.push(item);
            }
        }//function
        );//forEach

        return (
            <span>
                <p>Trip View : </p>
                <TripScrollView setItem={this.setItem.bind(this)} itemNumber={this.state.itemNumber} />
                <ItineraryView stylePlaceCard={this.props.stylePlaceCard} styleHotelCard={this.props.styleHotelCard} setBuilderCardEvent={this.props.setBuilderCardEvent}  changeItin={this.state.changeItin} changingFlight={this.changingFlight.bind(this)}  />
                <FlightView changeFlight={this.state.changeFlight} userId={this.props.userId} />

                <Control_Menu_3_1_Trip/>

                <h1 className="Voyager_Title_2">PLACES & HOTELS</h1>

               <i className="fas fa-search Voyager_Trip_Filter_Search"></i> <input placeholder="SEARCH" className="Voyager_Search" onChange={this.searchTrigger.bind(this)} />

                <a className="Voyager_Trip_Sort_Alpha" title="SORT ALPHABETICAL" onClick={this.changeSortOrder.bind(this)}><i className="fas fa-sort-alpha-down Voyager_Trip_Sort_Alpha"></i></a>
                <a className="Voyager_Trip_Sort_Location" title="SORT NEXT NEAREST" onClick={this.changeSortOrder.bind(this)}><i className="fas fa-map-marked Voyager_Trip_Sort_Location"></i></a>


                <ul>
                    {filteredPlaces.map((placeValue) =>
                        <p className="Voyager_Places_List" key={placeValue.placeID}>
                        <i className="fas fa-map-marker-alt Voyager_Places_List_Item_Icon_1"></i>
                            <a className="Voyager_Places_List_Item" onClick={() => this.togglePlaceClick(placeValue.placeID)}>{placeValue.placeName}</a>
                            {this.state.togglePlace[placeValue.placeID] ?
                                <HotelList key={placeValue.placeID} placeNameId={placeValue.placeID} changingItin={this.changingItin.bind(this)} userId={this.props.userId} />
                                : null}
                        </p>
                    )//places.map //<img className="Voyager_Places_List_Image" src={"http://www.voyagercuba.co.uk:10200/Images/Images-PlacesHotels/SANTIAGOgranmaIslandViewAcrossBay2.jpg"} />

                    }
                </ul>


            </span>
        )//Return;
    }//renderPlacesHotelVIew

  

    render() {

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderPlaceHotelView(this.state.places);
        return (
            <div>


                {contents}

            </div>
        );//Return
    }//Render
}


