import React, { Component } from 'react';
import { CardView } from '../components/CardView';
import Waypoint from 'react-waypoint';
import MenuHotelListView from '../containers/Menus/MenuHotelListView';
import MenuPlaceListView from '../containers/Menus/MenuPlaceListView';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { updatePlaceCardsWithPlaceState } from '../actions/actions';
//import 'antd/dist/antd.css';

export class PlaceListView extends Component {
    constructor(props) {

        super(props);
        this.state = {
            card: {}
        };
        //this.props.filterPlaceCards();

    }//Constructor

    setCard = (card, index,cardType) => {
        this.setState({ card: card });
        this.props.setCardType(cardType);
        this.props.setTripItem(card.id);
        this.props.setCard(card);
        
    }
    renderNodeList = () => {
       
        var placeCards = this.props.filteredPlaceCards;
        var hotelCards = this.props.hotelCards;
        var filterHotelByPlace = (placeNameId,hotelCard) => {    
            return placeNameId == hotelCard.placeNameId;
        }

        return (
            <span >
                <div className="Show"  >
                    {this.props.cardType === 'hotel' ?
                        <MenuHotelListView card={this.state.card} styleCard={this.props.styleHotelCards[2]} /> : <MenuPlaceListView card={this.state.card} styleCard={this.props.stylePlaceCards[2]} />
                    }</div>
                <div className="Voyager_Card_A_Container_Panel_1"  >
                    <div className="Voyager_Card_A_Container_Panel_2"  >

                        {
                            placeCards.map((cardValue, index) =>


                                <span className="Voyager_Places_List" key={cardValue.id}>
                                    <Waypoint></Waypoint>
                                    <a onClick={() => this.setCard(cardValue, index,'place')}>

                                        <CardView styleCard={this.props.stylePlaceCards[0]} key={cardValue.id + cardValue.title} card={cardValue} />

                                    </a>
                                    {
                                        hotelCards.filter( hotelCard => cardValue.id == hotelCard.placeNameId).map(hotelCard => 
                                            <a onClick={() => this.setCard(hotelCard, hotelCard.index, 'hotel')}>

                                            <CardView styleCard={this.props.styleHotelCards[0]} key={hotelCard.id + hotelCard.title} card={hotelCard} />
                                            <p>Hotel</p>
                                            </a>
                                        )
                                    }
                                </span>

                            )

                        }       </div></div>
            </span >
        )//Return;
    }//renderCardList

    render() {

        let contents = this.props.loading
            ? <p><em>Loading...</em></p>
            : this.renderNodeList();

        return (
            <div >
                {contents}
            </div>
        );//Return



    }//Render
}


