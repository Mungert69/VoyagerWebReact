import React, { Component } from 'react';

export class AccommodationRoomSpecification extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
        <div className="Hotel_Feature_Panel" >
            <span className="Hotel_Feature_Title">Rooms</span>
            {this.props.card.accommodationRoomSpecification.roomSharing ? <span><span className="Hotel_Feature_Item_Title">Room Sharing</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.roomSharingNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.privateBathroom ? <span><span className="Hotel_Feature_Item_Title">Private Bathroom</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.privateBathroomNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.airConditioning ? <span><span className="Hotel_Feature_Item_Title">Air Conditioning</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.airConditioningNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.ceilingFan ? <span><span className="Hotel_Feature_Item_Title">Ceiling Fan</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.ceilingFanNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.satelliteTv ? <span><span className="Hotel_Feature_Item_Title">Satellite TV</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.satelliteTvNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.cDPlayer ? <span><span className="Hotel_Feature_Item_Title">CD Player</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.cDPLayerNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.telephone ? <span><span className="Hotel_Feature_Item_Title">Telephone</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.telephoneNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.hairdryer ? <span><span className="Hotel_Feature_Item_Title">hairdryer</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.hairdryerNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.miniBar ? <span><span className="Hotel_Feature_Item_Title">minibar</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.miniBarNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.miniFridge ? <span><span className="Hotel_Feature_Item_Title">Mini Fridge</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.miniFridgeNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.livingArea ? <span><span className="Hotel_Feature_Item_Title">living Area</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.livingAreaNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification._terrace_Balcony ? <span><span className="Hotel_Feature_Item_Title">Terrace Balcony</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification._terrace_BalconyNote}</span></span> : null }     
            {this.props.card.accommodationRoomSpecification.diningArea ? <span><span className="Hotel_Feature_Item_Title">Dining Area</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.diningAreaNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.seaviewAvailable ? <span><span className="Hotel_Feature_Item_Title">Lake View</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.seaviewAvailableNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.lakeView ? <span><span className="Hotel_Feature_Item_Title">lake View</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.lakeViewNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.kitchen ? <span><span className="Hotel_Feature_Item_Title">Kitchen</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.kitchenNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.kitchenette ? <span><span className="Hotel_Feature_Item_Title">Kitchenette</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.kitchenetteNote}</span></span> : null }         
            {this.props.card.accommodationRoomSpecification.privatePool ? <span><span className="Hotel_Feature_Item_Title">Private Pool</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.privatePoolNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.ironingFacilities ? <span><span className="Hotel_Feature_Item_Title">Ironing Facilities</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.ironingFacilitiesNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.safe ? <span><span className="Hotel_Feature_Item_Title">safe</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.safeNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.noSmokingRoomAvailable ? <span><span className="Hotel_Feature_Item_Title">No Smoking Room Available</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.noSmokingRoomAvailableNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.hammocks ? <span><span className="Hotel_Feature_Item_Title">Hammocks</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.hammocksNote}</span></span> : null }
            {this.props.card.accommodationRoomSpecification.otherFacilities ? <span><span className="Hotel_Feature_Item_Title">Other Facilities</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationRoomSpecification.otherFacilitiesNote}</span></span> : null }
     
        </div> 

        );

    }


    render() {
        let contents = (this.props.card.accommodationRoomSpecification === undefined || this.props.card.accommodationRoomSpecification===null )
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span>
                {contents}

            </span>


        );//return
    }//render



}