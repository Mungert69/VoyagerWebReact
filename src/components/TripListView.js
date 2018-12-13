import React, { Component } from "react";
import withItinObj from "./HOCs/WithItinObj";
import { ItineraryListView } from "./ItineraryListView";
import { Button } from "antd";
import "antd/dist/antd.css";
import MenuTripListView from "./control/Menus/MenuTripListView";
import Waypoint from "react-waypoint";
import { TripCardView } from "./TripCardView";

export class TripListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      card: {}
    };
    //this.props.setTripCardDetailLevel(1);
  } //Constructor
  setCard = (card, index) => {
    this.setState({ card: card });
    this.props.setTripItem(index);
    this.props.setTripCard(card);
  };
  renderCardList = () => {
    let filteredCards = this.props.cards;
    if (filteredCards.length === 0) return null;
    return (
      <div className="Control_Trip_Cards_Container_Panel_1">
        <div className="Control_Trip_Cards_Container_Panel_2">
          <span>
            <MenuTripListView card={this.state.card} />
            {filteredCards.map((cardValue, index) => (
              <span>
              

                <p className="Voyager_Places_List" key={cardValue.id}>
                  <Waypoint onEnter={() => this.setCard(cardValue, index)} />

                  <TripCardView
                    userId={this.props.userId}
                    setTripCardEvent={this.props.setTripCardEvent}
                    card={cardValue}
                  />
                </p>
              </span>
            ))}
          </span>
        </div>
      </div>
    ); //Return
  }; //renderCardList

  render() {
    let contents = this.props.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderCardList(this.props.cards)
    );

    return <div>{contents}</div>; //Return
  } //Render
}
