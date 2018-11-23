import React, { Component } from "react";
import { Select, Button } from "antd";

import { VisualView } from "./VisualView";

import NodeListView from "../containers/NodeListView";
import TripListView from "../containers/TripListView";
import MenuListView from './control/Menus/MenuListView';

import TripView from "../containers/TripView";

import DetailView from "../containers/DetailView";


import { Control_Trip_Flights } from "./control/Control_Trip_Flights";
import { Control_Trip_Dates } from "./control/Control_Trip_Dates";
import { Control_Trip_Stages } from "./control/Control_Trip_Stages";
import _ from "lodash";


import MenuMain from './control/Menus/MenuMain';
import MenuTripView from "./control/Menus/MenuTripView";
import MenuDetailView from "./control/Menus/MenuDetailView";

const itinTemplateTypeID = 1;
const placeTemplateTypeID = 43;
const hotelTemplateTypeID = 44;
const itinMapTemplateTypeID = 1;
const placeMapTemplateTypeID = 48;
const hotelMapTemplateTypeID = 49;

const Option = Select.Option;

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

    this.props.fetchTripCards(itinTemplateTypeID);
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


              {this.props.isDetailViewVisible || this.props.isTripViewVisible ? (
                <VisualView />
              ) : null}

              

              {(this.props.cardType === "place" ||
                this.props.cardType === "hotel") &&
                this.props.isListViewVisible ? (
                  <NodeListView />
                ) : null}
              {this.props.cardType === "trip" && this.props.isListViewVisible ? (
                <TripListView />
              ) : null}

              {this.props.isTripViewVisible ? <div><TripView /> <MenuTripView changeViewPlaceWithFilterByNextHop={this.props.changeViewPlaceWithFilterByNextHop} changeView={this.props.changeView}/></div>: null}

              {this.props.isDetailViewVisible ? <div><DetailView /> <MenuDetailView/></div>: null}


              {this.props.isDetailViewVisible || this.props.isTripViewVisible ? (
                null
              ) : <MenuListView changeView={this.props.changeView} />}


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
