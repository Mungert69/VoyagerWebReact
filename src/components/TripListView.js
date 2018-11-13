import React, { Component } from "react";
import  withItinObj  from "./HOCs/WithItinObj";
import { ItineraryListView } from "./ItineraryListView";
import { Button } from "antd";
import "antd/dist/antd.css";
import { SearchBar } from "./control/SearchBarCom";
import { Control_Menu_Trip_2_1 } from './control/Control_Menu_Trip_2_1';
import { Control_Menu_Trip_2_2 } from './control/Control_Menu_Trip_2_2';
import { Control_Menu_Trip_2_3 } from './control/Control_Menu_Trip_2_3';

const ItineraryListViewWithItinObj = withItinObj(ItineraryListView);

export class TripListView extends Component {
  renderCardList = () => {
    let filteredCards = this.props.cards;

    return (
      <span>
        <div className="Hide"><Control_Menu_Trip_2_1/></div>
                        <div className="Hide why is there three components for this"><Control_Menu_Trip_2_2/></div>
                        <div className="Hide why is there three components for this"><Control_Menu_Trip_2_3/></div>
        {filteredCards.map(cardValue => (
          <span>
            <Button onClick={() => this.props.setTripCardEvent(cardValue, this.props.userId)}>
              View Trip : {cardValue.title}
            </Button>
            <p className="Voyager_Places_List" key={cardValue.id}>
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
