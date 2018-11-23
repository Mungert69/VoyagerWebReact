import React, { Component } from 'react';
import { CardView } from './CardView';
import { TripScrollView } from './TripScrollView';

export class DetailView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            item: 0,
            prItem: 0,
            itemNumber: 0,
        };

    }//constructor

    componentDidMount() {
        this.setParams();
    }

    componentWillReceiveProps(nextProps) {
        // console.log("logger: In TripDetailsView.componentWillReceiveProps value nextProp changeItin = " + nextProps.changeItin + " value of thisProp changeItin = " + this.props.changeItin);
        if (this.props.itinObj !== nextProps.itinObj || this.props.item !== nextProps.item) {
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
            if (this.props.cardType === 'place') prItemShift = 1;
            if (this.props.cardType === 'hotel') prItemShift = 2;
            itemCounted = prItemCounted * this.props.jumpCounter + this.props.prItemShift;
        }
        this.setState({ item: itemCounted, prItem: prItemCounted , itemNumber : itemCount});
    }

    setItem(itemVal) {
        console.log("logger: In TripDetailsView.setItem  item = " + itemVal);
        this.setState({ item: itemVal, prItem: Math.floor(itemVal / this.props.jumpCounter) });
    }


    renderTripDetailView = ( itinObj) => {
        //console.log("logger: In TripDetailsView.Render  pRSelections = " + prSelections);
        var contents=itinObj.prSelections.map((prSelection, index) => (
            <div key={index}>
                    <div>
                        <CardView key='itincard' styleCard={this.props.styleTripCard} card={itinObj.card} />
                    </div>
                    <div>
                        <CardView key='placecard' styleCard={this.props.stylePlaceCard} card={prSelection.placeCard} />
                    </div>
                    <div>
                        <CardView key='hotelcard' styleCard={this.props.styleHotelCard} card={prSelection.hotelCard} />
                    </div>

            </div>
          ));
        return (contents);

       
    }//renderCardView

    render() {

            return (
                <div >
                    <TripScrollView setItem={this.setItem.bind(this)} item={this.state.item} itemNumber={this.state.itemNumber * this.props.jumpCounter} />

                    {this.renderTripDetailView( this.props.itinObj)}

                </div>

            );//return
       
    }//render

}
