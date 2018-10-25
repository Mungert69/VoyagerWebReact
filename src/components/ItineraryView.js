import React, { Component } from 'react';
import { HotelList } from '../components/HotelList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardView } from '../components/CardView';
import { Button } from 'antd';
import { Carousel } from 'antd';
import '../voyager.css';

import {apiBaseUrl} from './Constants';

export class ItineraryView extends Component {


    constructor(props) {
        super(props);
        this.state = {
            places: [],
            loading: true,
            changeCard: false,
            nights: 0,
            placeCount: 0
        };
        this.refreshPrSelections();

    }// constructor
    componentWillReceiveProps(nextProps) {
        console.log("In ItineraryView.componentWillReceiveProps value nextProp changeItin = " + nextProps.changeItin + " value of thisProp changeItin = " + this.props.changeItin);
        if (this.props.changeItin !== nextProps.changeItin) {
            this.setState({ loading: true });
            this.refreshPrSelections();
        }
    }

    refreshPrSelections = () => {
        /*fetch(apiBaseUrl+'api/Itinerary/StoredItinObj/')
            .then((res) => res.text())
            .then((text) => text.length ? JSON.parse(text) : {})
            .then(data => {
                this.setState({ itinObj: data, loading: false });
                console.log("In  ItineraryView.refreshPrSelections value of data = " + data.prSelections);
            });*/
           
            this.props.fetchStoredItinObj();
    }

    passBackClick() {
        //ToDo pass this back to MapView
        this.setState({ changeCard: !this.state.changeCard });
    }


    deleteHotel = () => {
        // Add Hotel api call
        let str = apiBaseUrl+'api/Itinerary/DelHotel';
        fetch(str)
            .then(response => response.json())
            .then(result => {
                this.setState({ addResult: result });
            }).then(end => {
                this.refreshPrSelections();
                this.changingFlight();
            });//fetch

    }

    addNight = (index) => {
        // Add Hotel api call
        let str = apiBaseUrl+'api/Itinerary/AddNight/' + index + '/';
        fetch(str)
            .then(response => response.json())
            .then(result => {
                this.setState({ addResult: result });
            }).then(end => {
                this.refreshPrSelections();
                this.changingFlight();
            });//fetch

    }

    removeNight = (index) => {
        // Add Hotel api call
        let str =apiBaseUrl+ 'api/Itinerary/RemoveNight/' + index + '/';
        fetch(str)
            .then(response => response.json())
            .then(result => {
                this.setState({ addResult: result });
            }).then(end => {
                this.refreshPrSelections();
                this.changingFlight();
            });//fetch

    }

    changingFlight = () => {
        this.props.changingFlight();
    }


    renderPRSelections = (itinObj) => {
        if (itinObj===undefined) return;
        // Only render if there are items in the itinerary.
        if (itinObj.prSelections !== undefined && itinObj.prSelections !== null && itinObj.prSelections.length) {
            return (
                <div>
                    <p className="Voyager_Trip_Transfer" > {itinObj.transferItems[0]}</p>
                    {itinObj.prSelections.map((prSelection, index) =>
                        <div key={index}>
                            <div className="Voyager_Trip_Stages_Inline">

                                <span>
                                    <div className="Voyager_Trip_Control_Panel" >
                                        <div key="" className="flex-container">
                                            <div key="Control_Trip" className="Show">
                                                <span className="Voyager_Control_Item_A">
                                                    <Button onClick={() => this.props.setBuilderCardEvent(null, index, 'place')}>View Builder Place</Button>
                                                    <CardView styleCard={this.props.stylePlaceCard} key={index + prSelection.place} card={prSelection.placeCard} />
                                                </span>
                                            </div>
                                            <div key="Control_Places" className="Show" >
                                                <span className="Voyager_Control_Item_A">
                                                    <Button onClick={() => this.props.setBuilderCardEvent(null, index, 'hotel')}>View Builder Hotel</Button>
                                                    <CardView styleCard={this.props.styleHotelCard} key={index + prSelection.hotel} card={prSelection.hotelCard} />

                                                </span>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="Show">

                                        <a className="Voyager_Trip_Control_Nights_remove" title="SUBTRACT NIGHTS" onClick={() => this.removeNight(index)} ><FontAwesomeIcon className="Voyager_Trip_Nights_Subtract" icon="angle-down" /></a>
                                        {prSelection.nights}
                                        <a className="Voyager_Trip_Control_Nights_add" title="ADD NIGHTS" onClick={() => this.addNight(index)} > <FontAwesomeIcon className="Voyager_Trip_Nights_Add" icon="angle-up" /></a>
                                        <a className="Voyager_Trip_Control_Delete" title="DELETE STAGE" onClick={() => this.deleteHotel()} ><FontAwesomeIcon className="Voyager_Trip_Hotel_Remove" icon="times" /></a>
                                        <FontAwesomeIcon className="Voyager_Trip_Transport_Icon" icon="bus" />

                                        <p className="Voyager_Trip_Transfer" > {itinObj.transferItems[index+1]}</p>

                                    </div>
                                </span>

                            </div>
                        </div>

                    )}
                    <p className="Voyager_Trip_Transfer" > {itinObj.transferItems[itinObj.transferItems.length+1]}</p>

                </div>
            );//return
        }//if
    }//renderPRSelections

    render() {

        let contents = this.props.loading
            ? <p><em>Loading...</em></p>
            : this.renderPRSelections(this.props.itinObj);
        return (
            <div className="Voyager_Trip_Panel">
                <l className="Voyager_Trip_Control_Places_Total"> </l>
                <l className="Voyager_Title_3">{this.props.builderMode && 'MY TRIP '}</l>
                <l className="Voyager_Trip_Control_Nights_Total"> </l>

                {contents}

            </div>
        );//return
    }//render
}


