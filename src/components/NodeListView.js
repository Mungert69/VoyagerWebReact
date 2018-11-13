import React, { Component } from 'react';
import { CardView } from '../components/CardView';
import { SearchBar } from './control/SearchBarCom';
import { Control_Menu_Place_2 } from './control/Control_Menu_Place_2';
import { Control_Menu_Hotel_2 } from './control/Control_Menu_Hotel_2';

//import 'antd/dist/antd.css';

export class NodeListView extends Component {
    constructor(props) {

        super(props);
        //this.props.setTripCardDetailLevel(1);

    }//Constructor

 
    renderCardList = () => {

        var filteredCards=this.props.cards;
    
        return (           
                < span >
                {this.props.cardType === 'hotel' ?
                    <div className='Show' ><Control_Menu_Place_2/></div> : <Control_Menu_Hotel_2/>
                }
               
                   {
                        filteredCards.map((cardValue, index) =>
                            <span className="Voyager_Places_List" key={cardValue.id}>
                                <a className="Control_Viewnode_Button" onClick={() => this.props.setCardEvent(cardValue, index)}>View Node</a>
                                {this.props.cardType === 'hotel' ?
                                    <CardView styleCard={this.props.styleHotelCard} key={cardValue.id + cardValue.title} card={cardValue} />
                                    :
                                    <CardView styleCard={this.props.stylePlaceCard} key={cardValue.id + cardValue.title} card={cardValue} />
                                }
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


