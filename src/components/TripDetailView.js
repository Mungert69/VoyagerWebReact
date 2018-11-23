import React, { Component } from 'react';
import { CardView } from './CardView';
import { TripScrollView } from './TripScrollView';
import { apiBaseUrl } from './Constants';

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
        if (this.props.itinObj !== nextProps.itinObj || this.props.cardType !== nextProps.cardType) {
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
            let itemCount = this.props.itinObj.prSelections.length;
            this.setState({ itemNumber: itemCount });

        }
        else {
            if (this.props.cardType === 'place') {

                let itemCount = this.props.cards.length;
                this.setState({ itemNumber: itemCount });
                //console.log("logger: In TripDetailsView.refreshPrSelections value of data = " + this.props.cards);


            }
            if (this.props.cardType === 'hotel') {
                let itemCount = this.props.cards.length;
                this.setState({ itemNumber: itemCount });
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
                    <CardView key='hotel' styleCard={this.props.styleHotelCard} card={this.props.cards[this.state.item]} />
                </div >
            );
        }
        if (this.props.cardType === 'place') {
            return (
                <div>
                    <CardView key='place' styleCard={this.props.stylePlaceCard} card={this.props.cards[this.state.item]} />
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
                        <CardView key='placecard' styleCard={this.props.stylePlaceCard} card={prSelections[this.state.prItem].placeCard} />
                    </div>

                );//return};
            }
            if (this.state.item % this.props.jumpCounter === 2) {
                return (

                    <div>
                        <CardView key='hotelcard' styleCard={this.props.styleHotelCard} card={prSelections[this.state.prItem].hotelCard} />
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

                    {this.renderTripDetailView(this.props.itinObj.prSelections, this.props.itinObj)}

                </div>

            );//return
        }//if
        else {
            if (this.props.cardType === 'hotel' || this.props.cardType === 'place') {
                return (
                    <div >
                        <TripScrollView setItem={this.setItem.bind(this)} item={this.state.item} itemNumber={this.state.itemNumber * this.props.jumpCounter} />

                        {this.renderNodeDetailView()}

                    </div>

                );//return
            }//if
        }//else

    }//render

}
