﻿import React, { Component } from 'react';
import {apiBaseUrl} from './Constants';
export class HotelList extends Component {

    constructor(props) {
        super(props);
        this.state = { hotels: [], loading: true };
        let str =apiBaseUrl+ 'api/Hotels/Details/' + props.placeNameId;
        
        // Get hotels api call
        fetch(str,{cache: "no-store"})
            .then(response => response.json())
            .then(data => {
                this.setState({ hotels: data, loading: false, addResult: ' - add' });
            });
        
    }

    addHotel = (hotelID) => {
        // Add Hotel api call
        let str = apiBaseUrl+'api/Itinerary/AddHotel/' + this.props.placeNameId+'/'+hotelID+'/'+ this.props.userId +'/';
        fetch(str,{cache: "no-store"})
            .then(response => response.json())
            .then(result => {
                this.setState({ addResult: result });
            }).then(end => this.props.changingItin());

        // call the parent component to update other components on that level
        
    }//addHotel

  
     renderHotelList = (hotels) => {
        return (

            <ul className="Voyager_Hotels_List">
                {hotels.map((hotelValue) =>
                    <p className="Voyager_Hotels_List_Item" key={hotelValue.hotelID}>
                    <i className="fas fa-home Voyager_Hotels_List_Item_Icon"></i>
                                <a className="Voyager_Hotels_List_Item" onClick={() => this.addHotel(hotelValue.hotelID)} >
                           
                            {hotelValue.hotel + ' . ' + this.state.addResult}<i className="fas fa-plus Voyager_Hotels_List_Item_Nights_Add"></i>
                        </a>
                         
                        </p>
                    )}
               </ul>
        );//return
    }//renderHotelList

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderHotelList(this.state.hotels);
       
        return (
            <div  >
                {contents}
            </div>
        );//return
    }//render

    
}
