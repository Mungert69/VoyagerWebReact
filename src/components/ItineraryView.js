import React, { Component } from "react";
import { HotelList } from "../components/HotelList";
import { CardView } from "../components/CardView";
import "../voyager.css";
import { Select, Button } from "antd";
import { apiBaseUrl } from "./Constants";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

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

  deleteHotel = () => {
    // Add Hotel api call
    let str = apiBaseUrl + "api/Itinerary/DelHotel/" + this.props.userId + "/";
    fetch(str)
      .then(response => response.json())
      .then(result => {
        this.setState({ addResult: result });
      })
      .then(end => {
        this.refreshPrSelections();
        this.changingFlight();
      }); //fetch
  };

  addNight = index => {
    // Add Hotel api call
    let str =
      apiBaseUrl +
      "api/Itinerary/AddNight/" +
      index +
      "/" +
      this.props.userId +
      "/";
    fetch(str)
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
    fetch(str)
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
            {" "}
            {itinObj.transferNodeItems[0].transferItem.transferItem1}
          </p>
          {itinObj.prSelections.map((prSelection, index) => (
            <div key={index}>
              <a className="Control_Trip_Stages_Item_Group AnimationRipple">
                <div class="Control_Trip_Stages_Position_outer_wrapper">
                  <div className="Control_Trip_Stages_Position_left Control_Trip_Stages_Position_inner_wrapper">
                    <i className="show fas fa-circle Control_Trip_Stages_Stage_Icon">
                      <l className="Control_Trip_Stages_Stage_Icon_Number">
                        {index}
                      </l>
                    </i>

                    <a
                      className="Control_Trip_Stages_Stage_PlaceName"
                      onClick={() =>
                        this.props.setBuilderCardEvent(null, index, "place")
                      }
                    >
                      {prSelection.place}
                    </a>
                  </div>

                  <div className="Control_Trip_Stages_Position_right Control_Trip_Stages_Position_inner_wrapper">
                    <a
                      className="Control_Trip_Stages_Stage_HotelName"
                      onClick={() =>
                        this.props.setBuilderCardEvent(null, index, "hotel")
                      }
                    >
                      {prSelection.hotel}
                    </a>
                  </div>
                </div>
                <div class="Control_Trip_Stages_Position_outer_wrapper">
                  <div className="Control_Trip_Dates_Position_left Control_Trip_Stages_Position_inner_wrapper">
                    <i className="show far fa-car Control_Trip_Stages_Stage_Transport_Icon" />
                    <i className="hide far fa-bus Control_Trip_Stages_Stage_Transport_Icon" />
                  </div>

                  <div className="Control_Trip_Stages_Position_right Control_Trip_Stages_Position_inner_wrapper">
                    <span className="Control_Trip_Stages_Stage_HotelFeatures">
                      CITY CENTRE - SMALL HOTEL - HERITAGE - £££
                    </span>
                    <i className="show fas fa-moon Control_Trip_Stages_Stage_Nights_Icon" />
                    <a
                      className="Voyager_Trip_Control_Nights_add"
                      title="ADD NIGHTS"
                      onClick={() => this.addNight(index)}
                    >
                      <i className="fas fa-angle-up Voyager_Trip_Nights_Add" />
                    </a>
                    {prSelection.nights}
                    <a
                      className="Voyager_Trip_Control_Nights_remove"
                      title="SUBTRACT NIGHTS"
                      onClick={() => this.removeNight(index)}
                    >
                      <i className="fas fa-angle-down Voyager_Trip_Nights_Subtract" />
                    </a>
                    <a
                      className="Voyager_Trip_Control_Delete"
                      title="DELETE STAGE"
                      onClick={() => this.deleteHotel()}
                    >
                      <i className="fas fa-times Voyager_Trip_Hotel_Remove" />
                    </a>{" "}
                    <i className="fas fa-bus Voyager_Trip_Transport_Icon" />
                  </div>
                </div>
              </a>
              <div />
              <a>
                <i
                  className="show fas fa-caret-right Control_Trip_Stages_Stage_Detail_Icon"
                  onClick={() =>
                    this.props.setBuilderCardEvent(null, index, "place")
                  }
                />
              </a>

              <p className="Voyager_Trip_Transfer">
                {" "}
                {
                  itinObj.transferNodeItems[index + 1].transferItem
                    .transferItem1
                }
              </p>
            </div>
          ))}
          <p className="Voyager_Trip_Transfer">
            {" "}
            {
              itinObj.transferNodeItems[itinObj.transferNodeItems.length - 1]
                .transferItem.transferItem1
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
      <div className="Voyager_Trip_Panel">
        <l className="Voyager_Trip_Control_Places_Total"> </l>
        <l className="Voyager_Title_3">
          {this.props.builderMode && "MY TRIP "}
        </l>
        <l className="Voyager_Trip_Control_Nights_Total"> </l>

        {contents}
      </div>
    ); //return
  } //render
}
