import React, { Component } from "react";
import { CardView } from "../components/CardView";

const renderPRSelections = props => {
    // Only render if there are items in the itinerary.
    if (props.itinObj !== undefined && props.itinObj !== null ) {
      const prSelections = props.itinObj.prSelections;
      return (
        <div>
          {prSelections.map((prSelection, index) => (
            <div key={index}>
              <div className="Voyager_Trip_Control_Panel">
                <div className="flex-container">
                  <div key="Control_Trip" className="Show">
                    <span className="Voyager_Control_Item_A">
                      <CardView
                        styleCard={props.stylePlaceCard}
                        key={index + prSelection.place}
                        card={prSelection.placeCard}
                      />
                    </span>
                  </div>

                  <div key="Control_Places" className="Show">
                    <span className="Voyager_Control_Item_A">
                      <CardView
                        styleCard={props.styleHotelCard}
                        key={index + prSelection.hotel}
                        card={prSelection.hotelCard}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ); //return
    } //if
  }; //renderPRSelections

export const ItineraryListView = props => {
  
   let contents = props.loading ? (
    <p>
      <em>Loading...</em>
    </p>
  ) : (
    renderPRSelections(props)
  );

  //this.renderPRSelections(this.state.itinObj.prSelections);
  return <div className="Voyager_Trip_Panel">{contents}</div>; //return
};
