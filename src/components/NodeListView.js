import React, { Component } from 'react';
import { CardView } from '../components/CardView';
import { SearchBar } from './control/SearchBarCom';
import { Control_Menu_2_Place } from './control/Control_Menu_2_Place';
import { Control_Menu_2_Hotel } from './control/Control_Menu_2_Hotel';
import Waypoint from 'react-waypoint';

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
    renderCardList = () => {

        var filteredCards = this.props.cards;

        return (
            < span >
                {this.props.cardType === 'hotel' ?
                    <Control_Menu_2_Hotel card={this.state.card} styleCard={this.props.styleHotelCards[2]} /> : <Control_Menu_2_Place card={this.state.card} styleCard={this.props.stylePlaceCards[2]} />
                }

                {
                    filteredCards.map((cardValue, index) =>
                        <span className="Voyager_Places_List" key={cardValue.id}>
                            <a className="Control_Viewnode_Button" onClick={() => this.props.setCardEvent(cardValue, index)}>View Node</a>
                            {this.props.cardType === 'hotel' ?
                                <CardView styleCard={this.props.styleHotelCards[0]} key={cardValue.id + cardValue.title} card={cardValue} />
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
            : this.renderCardList();

        return (
            <div>

                {contents}

            </div>
        );//Return
    }//Render
}


