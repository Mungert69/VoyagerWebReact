import React, { Component } from 'react';

export class AccommodationDescription extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
          <div className="Hotel_Feature_Panel" >

         {this.props.card.accommodationDescription.descriptionNote ? <span className="Hotel_Feature_Item_Title">description</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.descriptionNote}</span>
         {this.props.card.accommodationDescription.honeymoon ? <span className="Hotel_Feature_Item_Title">honeymoon</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.honeymoonNote}</span>
         {this.props.card.accommodationDescription.childrensFacilities ? <span className="Hotel_Feature_Item_Title">childrens Facilities</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.childrensFacilitiesNote}</span>
         {this.props.card.accommodationDescription.pool ? <span className="Hotel_Feature_Item_Title">pool</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.poolNote}</span>
         {this.props.card.accommodationDescription.jacuzzi ? <span className="Hotel_Feature_Item_Title">jacuzzi</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.jacuzziNote}</span>
         {this.props.card.accommodationDescription.restaurant ? <span className="Hotel_Feature_Item_Title">restaurant</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.restaurantNote}</span>
         {this.props.card.accommodationDescription.bar ? <span className="Hotel_Feature_Item_Title">bar</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.barNote}</span>
         {this.props.card.accommodationDescription.roomService ? <span className="Hotel_Feature_Item_Title">room Service</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.roomServiceNote}</span>
         {this.props.card.accommodationDescription.beachTowelsProvided ? <span className="Hotel_Feature_Item_Title">beach Towels Provided</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.beachTowelsProvidedNote}</span>
         {this.props.card.accommodationDescription.carRental ? <span className="Hotel_Feature_Item_Title">car Rental</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.carRentalNote}</span>
         {this.props.card.accommodationDescription.toursDesk ? <span className="Hotel_Feature_Item_Title">tours Desk</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.toursDeskNote}</span>
         {this.props.card.accommodationDescription.eveningEntertainment ? <span className="Hotel_Feature_Item_Title">evening Entertainment</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.eveningEntertainmentNote}</span>
         {this.props.card.accommodationDescription.nightclub ? <span className="Hotel_Feature_Item_Title">nightclub</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.nightclubNote}</span>
         {this.props.card.accommodationDescription.shops ? <span className="Hotel_Feature_Item_Title">shops</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.shopsNote}</span>
         {this.props.card.accommodationDescription.moneyExchange ? <span className="Hotel_Feature_Item_Title">money Exchange</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.moneyExchangeNote}</span>
         {this.props.card.accommodationDescription.disabledFacilities ? <span className="Hotel_Feature_Item_Title">disabled Facilities</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.disabledFacilitiesNote}</span>
         {this.props.card.accommodationDescription.concierge ? <span className="Hotel_Feature_Item_Title">concierge</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.conciergeNote}</span>
         {this.props.card.accommodationDescription.sportsFacilities ? <span className="Hotel_Feature_Item_Title">sports Facilities</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.sportsFacilitiesNote}</span>
         {this.props.card.accommodationDescription.watersports ? <span className="Hotel_Feature_Item_Title">watersports</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.watersportsNote}</span>
         {this.props.card.accommodationDescription.scubaDiving ? <span className="Hotel_Feature_Item_Title">scuba Diving</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.scubaDivingNote}</span>
         {this.props.card.accommodationDescription.tennis ? <span className="Hotel_Feature_Item_Title">tennis</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.tennisNote}</span>
         {this.props.card.accommodationDescription.gymnasium ? <span className="Hotel_Feature_Item_Title">gymnasium</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.gymnasiumNote}</span>
         {this.props.card.accommodationDescription.golf ? <span className="Hotel_Feature_Item_Title">golf</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.golfNote}</span>
         {this.props.card.accommodationDescription.horseriding ? <span className="Hotel_Feature_Item_Title">horse riding</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.horseridingNote}</span>
         {this.props.card.accommodationDescription.squash ? <span className="Hotel_Feature_Item_Title">squash</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.squashNote}</span>
         {this.props.card.accommodationDescription.otherFacilities ? <span className="Hotel_Feature_Item_Title">other Facilities</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.otherFacilitiesNote}</span>

         </div>

        );

    }


    render() {
        let contents = (this.props.card.accommodationDescription === undefined)
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span>
                {contents}

            </span>


        );//return
    }//render



}