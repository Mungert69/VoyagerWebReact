import React, { Component } from 'react';
import { CardView } from '../components/CardView';
import Waypoint from 'react-waypoint';
import MenuHotelListView from '../containers/Menus/MenuHotelListView';
import MenuPlaceListView from '../containers/Menus/MenuPlaceListView';

//import 'antd/dist/antd.css';

export class NodeListView extends Component {
    constructor(props) {

        super(props);
        this.state = {

            card: {}
        };
        //this.props.setTripCardDetailLevel(1);

    }//Constructor

    setMessage = (card) => {

        this.setState({ card: card });
    }
    renderNodeList = () => {

        var filteredCards = this.props.cards;

        return (
            < span >
                {this.props.cardType === 'hotel' ?
                    <MenuHotelListView card={this.state.card} styleCard={this.props.styleHotelCards[2]} /> : <MenuPlaceListView card={this.state.card} styleCard={this.props.stylePlaceCards[2]} />
                }

                {
                    filteredCards.map((cardValue, index) =>
                        <span className="Voyager_Places_List" key={cardValue.id}>
                           {this.props.cardType === 'hotel' ?
                            <p>{cardValue.title}</p>
                                :
                                <CardView styleCard={this.props.stylePlaceCards[0]} key={cardValue.id + cardValue.title} card={cardValue} />
                            }
                            <Waypoint onEnter={() => this.setMessage(cardValue)} />
                        </span>

                    )
                }
            </span >
        )//Return;
    }//renderCardList

    render() {

        let contents = this.props.loading
            ? <p><em>Loading...</em></p>
            : this.renderNodeList();

        return (
            <div>

                {contents}

            </div>
        );//Return
    }//Render
}


