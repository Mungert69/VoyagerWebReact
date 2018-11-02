import React, { Component } from 'react';

export class AccommodationCharacteristics extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
            <div className="Hotel_Feature_Panel" >
            
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.smallHotel ? <span>Small Hotel</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.mediumHotel ? <span>medium Hotel</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.LargeHotel ? <span>Large Hotel</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.modern ? <span>modern</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.heritage ? <span>heritage</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.beachArea ? <span>beach Area</span> : null}</span>          
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.beachFront ? <span>beach Front</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.cityCentre ? <span>city Centre</span> : null}</span>      
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.cityOutskirts ? <span>city Outskirts</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.countryside ? <span>countryside</span> : null}</span>   
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.eco ? <span>eco</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.bB ? <span>bb</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.rustic ? <span>rustic</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.cabana ? <span>cabana</span> : null}</span>          
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.business ? <span>business</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.ownerManaged ? <span>owner Managed</span> : null}</span>      
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.farmStay ? <span>farm Stay</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.historicCentre ? <span>historic Centre</span> : null}</span> 
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.casa ? <span>casa</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.townCentre ? <span>townCentre</span> : null}</span>      
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.townOutskirts ? <span>townOutskirts</span> : null}</span>
            <span className="Hotel_Feature_Item_Title"> { this.props.card.accommodationCharacteristics.coastal ? <span>coastal</span> : null}</span>
         
            </div>
           

        );

    }


    render() {
        let contents = (this.props.card.accommodationCharacteristics === undefined)
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span>
                {contents}

            </span>


        );//return
    }//render



}