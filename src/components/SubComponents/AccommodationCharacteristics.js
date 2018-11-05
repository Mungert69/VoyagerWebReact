import React, { Component } from 'react';

export class AccommodationCharacteristics extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
            <div className="Hotel_Characteristics_Panel" >
            
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.smallHotel ? <span>Small Hotel<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.mediumHotel ? <span>medium Hotel<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.LargeHotel ? <span>Large Hotel<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.modern ? <span>modern<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.heritage ? <span>heritage<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.beachArea ? <span>beach Area<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>          
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.beachFront ? <span>beach Front<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.cityCentre ? <span>city Centre<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>      
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.cityOutskirts ? <span>city Outskirts<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.countryside ? <span>countryside<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>   
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.eco ? <span>eco<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.bB ? <span>bb<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.rustic ? <span>rustic<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.cabana ? <span>cabana<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>          
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.business ? <span>business<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.ownerManaged ? <span>owner Managed<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>      
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.farmStay ? <span>farm Stay<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.historicCentre ? <span>historic Centre<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span> 
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.casa ? <span>casa<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.townCentre ? <span>townCentre<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>      
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.townOutskirts ? <span>townOutskirts<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
            <span className="Hotel_Characteristics_Item_Title"> { this.props.card.accommodationCharacteristics.coastal ? <span>coastal<i className="fas fa-circle Voyager_Control_Icon_Divider"></i></span> : null}</span>
         
            </div>
           

        );

    }


    render() {
        let contents = (this.props.card.accommodationCharacteristics === undefined || this.props.card.accommodationCharacteristics===null)
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span>
                {contents}

            </span>


        );//return
    }//render



}