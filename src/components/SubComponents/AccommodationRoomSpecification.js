import React, { Component } from 'react';

export class AccommodationRoomSpecification extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
        <div className="Hotel_Feature_Panel" >
            
            {this.props.card.accommodationRoomSpecification.roomSharing ? <span className="Hotel_Feature_Item_Title">Room Sharing</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.roomSharingNote}</span>
            {this.props.card.accommodationRoomSpecification.privateBathroom ? <span className="Hotel_Feature_Item_Title">Private Bathroom</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.privateBathroomNote}</span>
            {this.props.card.accommodationRoomSpecification.airConditioning ? <span className="Hotel_Feature_Item_Title">Air Conditioning</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.airConditioningNote}</span>
            {this.props.card.accommodationRoomSpecification.ceilingFan ? <span className="Hotel_Feature_Item_Title">Ceiling Fan</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.ceilingFanNote}</span>
            {this.props.card.accommodationRoomSpecification.satelliteTv ? <span className="Hotel_Feature_Item_Title">Satellite TV</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.satelliteTvNote}</span>
            {this.props.card.accommodationRoomSpecification.cDPlayer ? <span className="Hotel_Feature_Item_Title">CD Player</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.cDPLayerNote}</span>
            {this.props.card.accommodationRoomSpecification.telephone ? <span className="Hotel_Feature_Item_Title">Telephone</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.telephoneNote}</span>
            {this.props.card.accommodationRoomSpecification.hairdryer ? <span className="Hotel_Feature_Item_Title">hairdryer</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.hairdryerNote}</span>
            {this.props.card.accommodationRoomSpecification.miniBar ? <span className="Hotel_Feature_Item_Title">minibar</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.miniBarNote}</span>
            {this.props.card.accommodationRoomSpecification.miniFridge ? <span className="Hotel_Feature_Item_Title">Mini Fridge</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.miniFridgeNote}</span>
            {this.props.card.accommodationRoomSpecification.livingArea ? <span className="Hotel_Feature_Item_Title">living Area</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.livingAreaNote}</span>
            {this.props.card.accommodationRoomSpecification._terrace_Balcony ? <span className="Hotel_Feature_Item_Title">Terrace Balcony</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification._terrace_BalconyNote}</span>     
            {this.props.card.accommodationRoomSpecification.diningArea ? <span className="Hotel_Feature_Item_Title">Dining Area</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.diningAreaNote}</span>
            {this.props.card.accommodationRoomSpecification.seaviewAvailable ? <span className="Hotel_Feature_Item_Title">Lake View</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.seaviewAvailableNote}</span>
            {this.props.card.accommodationRoomSpecification.lakeView ? <span className="Hotel_Feature_Item_Title">lake View</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.lakeViewNote}</span>
            {this.props.card.accommodationRoomSpecification.kitchen ? <span className="Hotel_Feature_Item_Title">Kitchen</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.kitchenNote}</span>
            {this.props.card.accommodationRoomSpecification.kitchenette ? <span className="Hotel_Feature_Item_Title">Kitchenette</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.kitchenetteNote}</span>         
            {this.props.card.accommodationRoomSpecification.privatePool ? <span className="Hotel_Feature_Item_Title">Private Pool</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.privatePoolNote}</span>
            {this.props.card.accommodationRoomSpecification.ironingFacilities ? <span className="Hotel_Feature_Item_Title">Ironing Facilities</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.ironingFacilitiesNote}</span>
            {this.props.card.accommodationRoomSpecification.safe ? <span className="Hotel_Feature_Item_Title">safe</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.safeNote}</span>
            {this.props.card.accommodationRoomSpecification.noSmokingRoomAvailable ? <span className="Hotel_Feature_Item_Title">No Smoking Room Available</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.noSmokingRoomAvailableNote}</span>
            {this.props.card.accommodationRoomSpecification.hammocks ? <span className="Hotel_Feature_Item_Title">Hammocks</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.hammocksNote}</span>
            {this.props.card.accommodationRoomSpecification.otherFacilities ? <span className="Hotel_Feature_Item_Title">Other Facilities</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.otherFacilitiesNote}</span>
     
        </div> 

        );

    }


    render() {
        let contents = (this.props.card.accommodationRoomSpecification === undefined || this.props.card.accommodationRoomSpecification===null )
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span >
                {contents}

            </span>


        );//return
    }//render



}