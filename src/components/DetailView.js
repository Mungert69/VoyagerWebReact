import React, { Component } from "react";
import { CardView } from "./CardView";
import { TripScrollView } from "./TripScrollView";
import Waypoint from "react-waypoint";
import MenuHotelListView from '../containers/Menus/MenuHotelListView';
import MenuPlaceListView from '../containers/Menus/MenuPlaceListView';

export class DetailView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardType: '',
      card: {},
      item: 0,
      prItem: 0,
      itemNumber: 0
    };
  } //constructor

  componentDidMount() {
    this.setParams();
  }

  componentWillReceiveProps(nextProps) {
    // console.log("logger: In TripDetailsView.componentWillReceiveProps value nextProp changeItin = " + nextProps.changeItin + " value of thisProp changeItin = " + this.props.changeItin);
    if (
      this.props.itinObj !== nextProps.itinObj ||
      this.props.item !== nextProps.item
    ) {
      this.setParams();
    }
  }

  setParams = () => {
    var itemCounted = 0;
    var prItemCounted = 0;
    var prItemShift = 0;
    itemCounted = this.props.item;
    let itemCount = this.props.itinObj.prSelections.length;
    // jumpCounter is redundent now leaving it place just in case needed again.
    if (this.props.jumpCounter === 3) {
      prItemCounted = this.props.item;
      if (this.props.cardType === "place") prItemShift = 1;
      if (this.props.cardType === "hotel") prItemShift = 2;
      itemCounted =
        prItemCounted * this.props.jumpCounter + this.props.prItemShift;
    }
    this.setState({
      item: itemCounted,
      prItem: prItemCounted,
      itemNumber: itemCount
    });
  };

  setItem(itemVal) {
    console.log("logger: In TripDetailsView.setItem  item = " + itemVal);
    this.setState({
      item: itemVal,
      prItem: Math.floor(itemVal / this.props.jumpCounter)
    });
  }

  setMessage = (card, index, cardType) => {
    this.setState({ card: card, cardType: cardType });
    this.props.setTripItem(index);
  };

  renderTripDetailView = itinObj => {
    //console.log("logger: In TripDetailsView.Render  pRSelections = " + prSelections);
    var contents =
      this.state.cardType === "hotel" ? (
        <MenuHotelListView
          card={this.state.card}
          styleCard={this.props.styleHotelCards[2]}
        />
      ) : (
        <MenuPlaceListView
          card={this.state.card}
          styleCard={this.props.stylePlaceCards[2]}
        />
      );
    contents += itinObj.prSelections.map((prSelection, index) => (
      <div key={index}>
        <div>
          <CardView
            key="itincard"
            styleCard={this.props.styleTripCard}
            card={itinObj.card}
          />
        </div>
        <Waypoint
          onEnter={() => this.setMessage(itinObj.card, index, "trip")}
        />
        <div>
          <CardView
            key="placecard"
            styleCard={this.props.stylePlaceCard}
            card={prSelection.placeCard}
          />
        </div>
        <Waypoint
          onEnter={() => this.setMessage(prSelection.placeCard, index, "place")}
        />
        <div>
          <CardView
            key="hotelcard"
            styleCard={this.props.styleHotelCard}
            card={prSelection.hotelCard}
          />
        </div>
        <Waypoint
          onEnter={() => this.setMessage(prSelection.hotelCard, index, "hotel")}
        />
      </div>
    ));
    return contents;
  }; //renderCardView

  render() {
    return (
      <div>
        <TripScrollView
          setItem={this.setItem.bind(this)}
          item={this.state.item}
          itemNumber={this.state.itemNumber * this.props.jumpCounter}
        />

        {this.renderTripDetailView(this.props.itinObj)}
      </div>
    ); //return
  } //render
}
