import React, { Component } from "react";
import { Select, Button } from "antd";

import  VisualView  from "../containers/VisualView";
import NodeListView from "../containers/NodeListView";
import TripListView from "../containers/TripListView";
import TripView from "../containers/TripView";
import DetailView from "../containers/DetailView";

import MenuDetailView from "../containers/Menus/MenuDetailView";
import MenuTripView from "../containers/Menus/MenuTripView";

import MenuMain from './control/Menus/MenuMain';
import MenuListView from './control/Menus/MenuListView';


import { Control_Filter_Sort_Hotel } from './control/Filter/Control_Filter_Sort_Hotel';

import { Control_Trip_Flights } from "./control/Control_Trip_Flights";
import { Control_Trip_Dates } from "./control/Control_Trip_Dates";
import { Control_Trip_Stages } from "./control/Control_Trip_Stages";

import { Control_Profile } from "./control/Control_Profile";

import _ from "lodash";





const itinTemplateTypeID = 1;
const placeTemplateTypeID = 43;
const hotelTemplateTypeID = 44;
const itinMapTemplateTypeID = 49;
const placeMapTemplateTypeID = 49;
const hotelMapTemplateTypeID = 49;

const userId = 'xxxx';
export class TripContainer extends Component {
  displayName = "Trip Container";

  constructor(props) {
    super(props);

    this.state = { countryId: 1 };

    this.props.fetchTripMapStyleCards(itinMapTemplateTypeID);
    this.props.fetchPlaceMapStyleCards(placeMapTemplateTypeID);
    this.props.fetchHotelMapStyleCards(hotelMapTemplateTypeID);

    this.props.fetchTripStyleCards(itinTemplateTypeID);
    this.props.fetchPlaceStyleCards(placeTemplateTypeID);
    this.props.fetchHotelStyleCards(hotelTemplateTypeID);

    this.props.fetchAllTripCards(userId);
    this.props.fetchPlaceCards();
    this.props.fetchHotelCards();
  } //Constructor

  render() {
    return (
      <span>
        {this.props.loading ? (
          <span>LOADING...</span>
        ) : (
          <div>
          

              <MenuMain changeView={this.props.changeView}
                changeDetailLevel={this.props.changeDetailLevel}
                cardDetailLevel={this.props.cardDetailLevel} />


              {this.props.isDetailViewVisible || this.props.isTripViewVisible ||  this.props.isListViewVisible? (
                <VisualView  />
              ) : null}

              
  
              {(this.props.cardType === "place" ||
                this.props.cardType === "hotel") &&
                this.props.isListViewVisible ? (
                  <NodeListView />
                ) : null}
              {this.props.cardType === "trip" && this.props.isListViewVisible ? (
                <TripListView />
              ) : null}

              {this.props.isTripViewVisible ? <div><TripView /> <MenuTripView /></div>: null}

              {this.props.isDetailViewVisible ? <div><DetailView /> <MenuDetailView/></div>: null}


              {this.props.isDetailViewVisible || this.props.isTripViewVisible ? (
                null
              ) : <MenuListView changeView={this.props.changeView} />}


               <div className="Hide">
                <Control_Filter_Sort_Hotel />
              </div>
              <div className="Hide merge this code with FlightView.js">
                <Control_Trip_Flights />
              </div>
              <div className="Hide where is this placed?">
                <Control_Trip_Dates />
              </div>
              <div className="Hide merge this with ItineraryView.js">
                <Control_Trip_Stages />
              </div>

            </div>
          )}
      </span>
    );
  }
}
