import React, { Component } from "react";
import { Select, Button } from "antd";

import VisualView from "../../containers/VisualView";
import NodeListView from "../../containers/NodeListView";
import TripListView from "../../containers/TripListView";
import TripView from "../../containers/TripView";
import DetailView from "../../containers/DetailView";
import ImageView from "../../containers/ImageView";
import MapView from "../../containers/MapView";

import MenuDetailView from "../../containers/Menus/MenuDetailView";
import MenuTripView from "../../containers/Menus/MenuTripView";

import MenuMain from '../control/Menus/MenuMain';
import MenuListView from '../control/Menus/MenuListView';



import _ from "lodash";





const itinTemplateTypeID = 1;
const placeTemplateTypeID = 43;
const hotelTemplateTypeID = 44;
const itinMapTemplateTypeID = 49;
const placeMapTemplateTypeID = 49;
const hotelMapTemplateTypeID = 49;

const userId = 'ffffffff-ffff-ffff-ffff-ffffffffffff';
export class TestContainer extends Component {
    displayName = "Trip Container";

    constructor(props) {
        super(props);

       

        this.props.fetchTripMapStyleCards(itinMapTemplateTypeID);
        this.props.fetchPlaceMapStyleCards(placeMapTemplateTypeID);
        this.props.fetchHotelMapStyleCards(hotelMapTemplateTypeID);

        this.props.fetchTripStyleCards(itinTemplateTypeID);
        this.props.fetchPlaceStyleCards(placeTemplateTypeID);
        this.props.fetchHotelStyleCards(hotelTemplateTypeID);

        this.props.fetchAllTripCards(userId);
        this.props.fetchPlaceCards();
        this.props.fetchHotelCards();
         

         this.state = { countryId: 1};
    } //Constructor

    render() {
        const showComponent = {
            showMenuMain: false,
            showImageView : false,
            showMapView : true,
            showVisualView: false,
            showNodeListView: false,
            showTripListView: false,
            showTripView: false,
            showDetailView: false,
            showMenuListView: false,
            showMenuListView : false
        };

       
//Setup HotelCard for testing
const hotelCard =this.props.hotelCards[0];
this.props.setCard(hotelCard);
//Setup Hotel FilteredCards for testing
this.props.changeView('hotel');

        return (
            <span>
                {this.props.loading ? (
                    <span>LOADING...</span>
                ) : (
                        <div>

                            {showComponent.showMenuMain ? <MenuMain changeView={this.props.changeView}
                                changeDetailLevel={this.props.changeDetailLevel}
                                cardDetailLevel={this.props.cardDetailLevel} /> : null}



                            {showComponent.showVisualView ?
                                <VisualView />
                                : null}

                            {showComponent.showImageView ? <ImageView/> : null}
                            {showComponent.showMapView ? <MapView/> : null}

                            {showComponent.showNodeListView ?
                                <NodeListView />
                                : null}

                            {showComponent.showTripListView ? (
                                <TripListView />
                            ) : null}

                            {showComponent.showTripView ? <div><TripView /> <MenuTripView /></div> : null}

                            {showComponent.showDetailView ? <div><DetailView /> <MenuDetailView /></div> : null}


                            {showComponent.showMenuListView ? 
                                 <MenuListView changeView={this.props.changeView} /> : null}




                        </div>
                    )}
            </span>
        );
    }
}
