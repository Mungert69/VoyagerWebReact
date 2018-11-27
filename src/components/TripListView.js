import React, { Component } from "react";
import withItinObj from "./HOCs/WithItinObj";
import { ItineraryListView } from "./ItineraryListView";
import { Button } from "antd";
import "antd/dist/antd.css";
import MenuTripListView from "./control/Menus/MenuTripListView";
import Waypoint from 'react-waypoint';
const ItineraryListViewWithItinObj = withItinObj(ItineraryListView);

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
  };
  renderCardList = () => {
    let filteredCards = this.props.cards;
    if (filteredCards.length === 0) return null;
    return (
      <span>
        <MenuTripListView card={this.state.card} /> 
        {filteredCards.map((cardValue,index) => (
          <span>
            <Button
              onClick={() =>
                this.props.setTripCardEvent(cardValue, this.props.userId)
              }
            >
              View Trip : {cardValue.title}
            </Button>
            <p className="Voyager_Places_List" key={cardValue.id}>
            <Waypoint onEnter={() => this.setCard(cardValue,index)} />                         
              <ItineraryListViewWithItinObj
                stylePlaceCard={this.props.stylePlaceCard}
                styleHotelCard={this.props.styleHotelCard}
                key={cardValue.id + cardValue.title}
                card={cardValue}
              />
            </p>
          </span>
        ))}
      </span>
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
