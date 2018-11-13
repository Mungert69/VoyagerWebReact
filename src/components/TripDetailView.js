import React, { Component } from 'react';
import { CardView } from './CardView';
import { TripScrollView } from './TripScrollView';
import {apiBaseUrl} from './Constants';
import { Control_Menu_3_2_Trip } from "./control/Control_Menu_3_2_Trip";

export class TripDetailView extends Component {

    constructor(props) {
        super(props);
        var itemCounted = 0;
        var prItemCounted = 0;
        var cardTypeIn = '';
        var prItemShift = 0;
        // if a list of hotels no need to use jumpCounter to display trip hotel then place detail.
        itemCounted = props.item;
        if (props.jumpCounter === 3) {
            prItemCounted = props.item;
            if (props.cardType === 'place') prItemShift = 1;
            if (props.cardType === 'hotel') prItemShift = 2;
            itemCounted = prItemCounted * props.jumpCounter + prItemShift;
        }
        
        this.state = {
            builderMode: false,
            loading: true,
            itinObj: {},
            item: itemCounted,
            prItem: prItemCounted,
            cardType: cardTypeIn,
            itemNumber: 0,
            inputDataType: ''
        };

    }//constructor

    componentDidMount() {
        this.refreshPrSelections();
    }

    componentWillReceiveProps(nextProps) {
       // console.log("logger: In TripDetailsView.componentWillReceiveProps value nextProp changeItin = " + nextProps.changeItin + " value of thisProp changeItin = " + this.props.changeItin);
        if (this.props.changeItin !== nextProps.changeItin || this.props.cardType !== nextProps.cardType) {
            this.setState({ loading: true });
            this.refreshPrSelections();
            this.setParams();
        }
    }

    setParams = () => {
        var itemCounted = 0;
        var prItemCounted = 0;
        var prItemShift = 0;
        itemCounted = this.props.item;
        // if a list of hotels no need to use jumpCounter to display trip hotel then place detail.
        if (this.props.jumpCounter === 1) {
            prItemCounted = this.props.item;
            if (this.props.cardType === 'place') prItemShift = 1;
            if (this.props.cardType === 'hotel') prItemShift = 2;
            itemCounted = prItemCounted * this.props.jumpCounter + this.props.prItemShift;
        }      
        this.setState({ item: itemCounted, prItem: prItemCounted });
    }

    refreshPrSelections = () => {
        if (this.props.builderMode === true) {
            fetch(apiBaseUrl+'api/Itinerary/StoredItinObj/')
                .then((res) => res.text())
                .then((text) => text.length ? JSON.parse(text) : {})
                .then(data => {
                    let itemCount = data.prSelections.length;
                    this.setState({ itinObj: data, loading: false, itemNumber: itemCount });
                    //console.log("logger: In TripDetailsView.refreshPrSelections value of data = " + data.prSelections);

                });
        }
        else {
            if (this.props.cardType === 'place') {

                let itemCount = this.props.cards.length;
                this.setState({ loading: false, itemNumber: itemCount });
                //console.log("logger: In TripDetailsView.refreshPrSelections value of data = " + this.props.cards);


            }
            if (this.props.cardType === 'hotel') {
                let itemCount = this.props.cards.length;
                this.setState({ loading: false, itemNumber: itemCount });
                //console.log("logger: In TripDetailsView.refreshPrSelections value of data = " + this.props.cards);

            }
        }

    }

    setItem(itemVal) {
        console.log("logger: In TripDetailsView.setItem  item = " + itemVal);
        this.setState({ item: itemVal, prItem: Math.floor(itemVal / this.props.jumpCounter) });
    }

    renderNodeDetailView() {
        if (this.props.cardType === 'hotel') {
            return (
                <div>
                    <CardView key='hotel' styleCard={this.props.styleHotelCard} card={this.props.cards[this.state.item]}  />
                </div >
            );
        }
        if (this.props.cardType === 'place') {
            return (
                <div>
                    <CardView key='place' styleCard={this.props.stylePlaceCard} card={this.props.cards[this.state.item]}  />
                </div >
            );
        }
    }
    renderTripDetailView = (prSelections, itinObj) => {
        console.log("logger: In TripDetailsView.Render  pRSelections = " + prSelections);

        if (prSelections !== undefined && prSelections !== null && prSelections.length) {
            if (this.state.item % this.props.jumpCounter === 0) {
                return (

                    <div>
                        <CardView key='itincard' styleCard={this.props.styleTripCard} card={itinObj.card} />
                    </div>

                );//return
            }
            if (this.state.item % this.props.jumpCounter === 1) {
                return (

                    <div>
                        <CardView key='placecard' styleCard={this.props.stylePlaceCard} card={prSelections[this.state.prItem].placeCard}  />
                    </div>

                );//return};
            }
            if (this.state.item % this.props.jumpCounter === 2) {
                return (

                    <div>
                        <CardView key='hotelcard' styleCard={this.props.styleHotelCard} card={prSelections[this.state.prItem].hotelCard}  />
                    </div>

                );//return};
            }
        }//if
        else { return (<p>nothing</p>); }
    }//renderCardView

    render() {

        if (this.props.builderMode === true) {
            return (
                <div >
                    <TripScrollView setItem={this.setItem.bind(this)} item={this.state.item} itemNumber={this.state.itemNumber * this.props.jumpCounter} />

                    {this.renderTripDetailView(this.state.itinObj.prSelections, this.state.itinObj)}
                    <Control_Menu_3_2_Trip />
           
                </div>

            );//return
        }//if
        else {
            if (this.props.cardType === 'hotel' || this.props.cardType === 'place') {
                return (
                    <div >
                        <TripScrollView setItem={this.setItem.bind(this)} item={this.state.item} itemNumber={this.state.itemNumber * this.props.jumpCounter} />

                        {this.renderNodeDetailView()}
                         <Control_Menu_3_2_Trip />
            
                    </div>

                );//return
            }//if
        }//else
       
    }//render

}
