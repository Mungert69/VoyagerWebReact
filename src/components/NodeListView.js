import React, { Component } from 'react';
import { CardView } from '../components/CardView';
import Waypoint from 'react-waypoint';
import MenuHotelListView from '../containers/Menus/MenuHotelListView';
import MenuPlaceListView from '../containers/Menus/MenuPlaceListView';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
//import 'antd/dist/antd.css';

export class NodeListView extends Component {
    constructor(props) {

        super(props);
        this.state = {
            card: {}
        };
        //this.props.setTripCardDetailLevel(1);

    }//Constructor

    setCard = (card, index) => {   
        this.setState({ card: card });
        this.props.setTripItem(index);
        this.props.setTripCard(card);
    }
    renderNodeList = () => {
        var filteredCards = this.props.cards;

        return (
            <span >
            <div className="Show"  >
                {this.props.cardType === 'hotel' ?
                    <MenuHotelListView card={this.state.card} styleCard={this.props.styleHotelCards[2]} /> : <MenuPlaceListView card={this.state.card} styleCard={this.props.stylePlaceCards[2]} />
                }</div>
                <div className="Voyager_Card_A_Container_Panel_1"  >
                <div className="Voyager_Card_A_Container_Panel_2"  >
                
                {
                    filteredCards.map((cardValue, index) =>
                      
               
                       <span  className="Voyager_Places_List" key={cardValue.id}>
                           <Waypoint onEnter={() => this.setCard(cardValue,index)} /> 
                           {this.props.cardType === 'hotel' ?
                                <CardView  styleCard={this.props.styleHotelCards[0]} key={cardValue.id + cardValue.title} card={cardValue} />
                           
                                :
                                <CardView styleCard={this.props.stylePlaceCards[0]} key={cardValue.id + cardValue.title} card={cardValue} />
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


