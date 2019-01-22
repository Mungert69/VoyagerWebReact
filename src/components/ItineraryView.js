﻿import React, { Component } from "react";
import { HotelList } from "../components/HotelList";
import { CardDynView } from "../components/CardDynView";
import "../voyager.css";
import { Select, Button } from "antd";
import { apiBaseUrl } from "./Constants";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { AccommodationCharacteristics } from "./SubComponents/AccommodationCharacteristics";
import {FlightView} from './FlightVIew';
export class ItineraryView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      changeCard: false,
    };
    this.refreshPrSelections();
  } // constructor
  componentWillReceiveProps(nextProps) {
    console.log(
      "In ItineraryView.componentWillReceiveProps value nextProp changeItin = " +
        nextProps.changeItin +
        " value of thisProp changeItin = " +
        this.props.changeItin
    );
    if (this.props.changeItin !== nextProps.changeItin) {
      this.setState({ loading: true });
      this.refreshPrSelections();
    }
  }

  

  refreshPrSelections = () => {
    this.props.fetchStoredItinObj(this.props.userId);
  };

  passBackClick() {
    //ToDo pass this back to MapView
    this.setState({ changeCard: !this.state.changeCard });
  }


  addNight = index => {
    // Add Hotel api call
    let str =
      apiBaseUrl +
      "api/Itinerary/AddNight/" +
      index +
      "/" +
      this.props.userId +
      "/";
    fetch(str,{cache: "no-store"})
      .then(response => response.json())
      .then(result => {
        this.setState({ addResult: result });
      })
      .then(end => {
        this.refreshPrSelections();
        this.changingFlight();
      }); //fetch
  };

  removeNight = index => {
    // Add Hotel api call
    let str =
      apiBaseUrl +
      "api/Itinerary/RemoveNight/" +
      index +
      "/" +
      this.props.userId +
      "/";
    fetch(str,{cache: "no-store"})
      .then(response => response.json())
      .then(result => {
        this.setState({ addResult: result });
      })
      .then(end => {
        this.refreshPrSelections();
        this.changingFlight();
      }); //fetch
  };

  changingFlight = () => {
    this.props.changingFlight();
  };

  renderPRSelections = itinObj => {
    if (itinObj === undefined) return;
    // Only render if there are items in the itinerary.
    if (
      itinObj.prSelections !== undefined &&
      itinObj.prSelections !== null &&
      itinObj.prSelections.length
    ) {
      return (
        <div className="Control_Trip_Stages">
          <p className="Voyager_Trip_Transfer">
           
            {itinObj.transferNodeItems[0].transferItem.transferItem1}
          </p>

          {itinObj.prSelections.map((prSelection, index) => (
            <div key={index}>
                            <div className="Voyager_Trip_Stages_Inline">

                                <span>
                                    <div className="Voyager_Trip_Control_Panel" >
                                        <div key="" className="flex-container">
                                            <div key="Control_Trip" className="Show">
                                                <span className="Voyager_Control_Item_A">
                                                    <Button onClick={() => this.props.setBuilderCardEvent(null, index, 'place')}>View Builder Place</Button>
                                                    <CardDynView index={index} prSelection={prSelection} removeNight={this.removeNight.bind(this)} addNight={this.addNight.bind(this)}  itinObj={itinObj} styleCard={this.props.styleHotelCard} key={index + prSelection.place} card={prSelection.placeCard} />
                                              </span>
                                            </div>
                                            <div key="Control_Places" className="Show" >
                                                <span className="Voyager_Control_Item_A">
                                                    <Button onClick={() => this.props.setBuilderCardEvent(null, index, 'hotel')}>View Builder Hotel</Button>
                                                    <CardDynView index={index} removeNight={this.removeNight} addNight={this.addNight}  itinObj={itinObj} styleCard={this.props.styleHotelCard} key={index + prSelection.hotel} card={prSelection.hotelCard} />
                                                </span>
                                               
                                            </div>

                                        </div>

                                    </div>
                                   
                                </span>

                            </div>
                        </div>

          ))}
          <p className="Voyager_Trip_Transfer">
                {
                  itinObj.transferNodeItems[
                    itinObj.transferNodeItems.length - 1
                  ].transferItem.transferItem1
                }
              </p>
        </div>
      ); //return
    } //if
  }; //renderPRSelections

  render() {
    let contents = this.props.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderPRSelections(this.props.itinObj)
    );
    return (
      <div className="Control_Trip_Stages_Container_Panel_1">
        <div className="Control_Trip_Stages_Container_Panel_2">
          <div className="Voyager_Trip_Panel">
            <l className="Voyager_Trip_Control_Places_Total"> </l>
            <l className="Voyager_Title_3">
              {this.props.builderMode && "MY TRIP "}
            </l>
            <l className="Voyager_Trip_Control_Nights_Total"> </l>
            {contents}
            <div  className="Flight_View_Panel">
            <FlightView changeFlight={this.props.changeFlight} userId={this.props.userId} />
</div>
          </div>
        </div>
      </div>
    ); //return
  } //render
}
