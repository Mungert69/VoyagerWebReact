import React, { Component } from "react";
import { CardView } from "./CardView";
import { TripScrollView } from "./TripScrollView";
import Waypoint from "react-waypoint";
import MenuHotelListView from '../containers/Menus/MenuHotelListView';
import MenuPlaceListView from '../containers/Menus/MenuPlaceListView';
import MenuTripListView from "./control/Menus/MenuTripListView";

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
    //this.setParams();
  }

  componentWillReceiveProps(nextProps) {
    if (
      this.props.itinObj !== nextProps.itinObj ||
      this.props.item !== nextProps.item
    ) {
      //this.setParams();
    }
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.itinObj !== nextProps.itinObj ||
      this.props.item !== nextProps.item || this.props.cardType !== nextProps.cardType) {
      return true;
    }
    return false;
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


  setCard = (card, index, cardType) => {
    this.setState({ card: card, cardType: cardType });
    this.props.setTripItem(index);
    this.props.setCard(card);
    this.props.setCardType(cardType);
  };

  renderTripDetailView = itinObj => {
    //console.log("logger: In TripDetailsView.Render  pRSelections = " + prSelections);
    var menuContents = '';
    
    if (this.state.cardType === 'trip')
      menuContents = <MenuTripListView
        card={this.state.card}
        styleCard={this.props.styleTripCards[2]}
        hideStagePlaces={false} 
      />;

    if (this.state.cardType === "hotel")
      menuContents = <MenuHotelListView
        card={this.state.card}
        styleCard={this.props.styleHotelCards[2]}
      />;
    if (this.state.cardType === "place")
      menuContents = <MenuPlaceListView
        card={this.state.card}
        styleCard={this.props.stylePlaceCards[2]}
      />;

    var contents = itinObj.prSelections.map((prSelection, index) => (
      <div key={index}>
        <div>
          <a onClick={() => this.setCard(itinObj.card, index, "trip")}>
            <CardView
              key="itincard"
              styleCard={this.props.styleTripCards[0]}
              card={itinObj.card}
            />
          </a>

        </div>
        <Waypoint
          onEnter={() => this.setCard(itinObj.card, index, "trip")}
        />
        <div>
          <a onClick={() => this.setCard(prSelection.placeCard, index, "place")}>
            <CardView
              key="placecard"
              styleCard={this.props.stylePlaceCards[0]}
              card={prSelection.placeCard}
            />
          </a>

        </div>
        <Waypoint
          onEnter={() => this.setCard(prSelection.placeCard, index, "place")}
        />
        <div>
          <a onClick={() => this.setCard(prSelection.hotelCard, index, "hotel")}>
            <CardView
              key="hotelcard"
              styleCard={this.props.styleHotelCards[0]}
              card={prSelection.hotelCard}
            />
          </a>

        </div>
        <Waypoint
          onEnter={() => this.setCard(prSelection.hotelCard, index, "hotel")}
        />
      </div>
    ));
    return (<div>{menuContents}{contents}</div>);
  }; //renderCardView

  render() {
    return (
      <div>

        {this.renderTripDetailView(this.props.itinObj)}
      </div>
    ); //return
  } //render
}
