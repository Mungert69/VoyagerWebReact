import React, { Component } from "react";
import { Select, Button } from "antd";
import TripListView from "../containers/TripListView";
import TripView from "../containers/TripView";
import { VisualView } from "./VisualView";
import TripDetailView from "../containers/TripDetailView";
import NodeListView from "../containers/NodeListView";
import SearchBar from "./control/SearchBarCom";
import { Control_Menu_1 } from "./control/Control_Menu_1";

import { Control_Menu_2_Info } from "./control/Control_Menu_2_Info";
import { Control_Menu_3 } from "./control/Control_Menu_3";

import { Control_Share } from "./control/Control_Share";

import { Control_Trip_Flights } from "./control/Control_Trip_Flights";
import { Control_Trip_Dates } from "./control/Control_Trip_Dates";
import { Control_Trip_Stages } from "./control/Control_Trip_Stages";
import _ from "lodash";

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
            <Control_Menu_1
              changeView={this.props.changeView}
              changeDetailLevel={this.props.changeDetailLevel}
              cardDetailLevel={this.props.cardDetailLevel}
            />

            {this.props.isDetailViewVisible || this.props.isTripViewVisible ? (
              <VisualView />
            ) : null}

            {this.props.isDetailViewVisible ? <TripDetailView /> : null}

            {(this.props.cardType === "place" ||
              this.props.cardType === "hotel") &&
            this.props.isListViewVisible ? (
              <NodeListView />
            ) : null}
            {this.props.cardType === "trip" && this.props.isListViewVisible ? (
              <TripListView />
            ) : null}

            {this.props.isTripViewVisible ? <TripView /> : null}
          

            <Control_Menu_3 changeView={this.props.changeView} />

            <div className="Hide where is this placed?">
              <Control_Menu_2_Info />
            </div>
            <div className="Hide where is this placed?">
              <Control_Share />
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
