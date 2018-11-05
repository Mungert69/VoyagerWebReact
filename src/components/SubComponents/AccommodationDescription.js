import React, { Component } from 'react';

export class AccommodationDescription extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
          <div className="Hotel_Feature_Panel" >
<div>
         {this.props.card.accommodationDescription.descriptionNote ? <span className="Hotel_Feature_Title">description</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.descriptionNote}</span>
         <span className="Hotel_Feature_Title">features</span>
         {this.props.card.accommodationDescription.honeymoon ? <span><span className="Hotel_Feature_Item_Title">honeymoon</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.honeymoonNote}</span></span> : null }
         {this.props.card.accommodationDescription.childrensFacilities ? <span><span className="Hotel_Feature_Item_Title">childrens Facilities</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.childrensFacilitiesNote}</span></span> : null }
         {this.props.card.accommodationDescription.pool ? <span><span className="Hotel_Feature_Item_Title">pool</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.poolNote}</span></span> : null }
         {this.props.card.accommodationDescription.jacuzzi ? <span><span className="Hotel_Feature_Item_Title">jacuzzi</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.jacuzziNote}</span></span> : null }
         {this.props.card.accommodationDescription.restaurant ?<span><span className="Hotel_Feature_Item_Title">restaurant</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.restaurantNote}</span></span> : null }
         {this.props.card.accommodationDescription.bar ? <span><span className="Hotel_Feature_Item_Title">bar</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.barNote}</span></span> : null }
         {this.props.card.accommodationDescription.roomService ? <span><span className="Hotel_Feature_Item_Title">room Service</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.roomServiceNote}</span></span> : null }
         {this.props.card.accommodationDescription.beachTowelsProvided ? <span><span className="Hotel_Feature_Item_Title">beach Towels Provided</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.beachTowelsProvidedNote}</span></span> : null }
         {this.props.card.accommodationDescription.carRental ? <span><span className="Hotel_Feature_Item_Title">car Rental</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.carRentalNote}</span></span> : null }
         {this.props.card.accommodationDescription.toursDesk ? <span><span className="Hotel_Feature_Item_Title">tours Desk</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.toursDeskNote}</span></span> : null }
         {this.props.card.accommodationDescription.eveningEntertainment ? <span><span className="Hotel_Feature_Item_Title">evening Entertainment</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.eveningEntertainmentNote}</span></span> : null }
         {this.props.card.accommodationDescription.nightclub ? <span><span className="Hotel_Feature_Item_Title">nightclub</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.nightclubNote}</span></span> : null }
         {this.props.card.accommodationDescription.shops ? <span><span className="Hotel_Feature_Item_Title">shops</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.shopsNote}</span></span> : null }
         {this.props.card.accommodationDescription.moneyExchange ? <span><span className="Hotel_Feature_Item_Title">money Exchange</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.moneyExchangeNote}</span></span> : null }
         {this.props.card.accommodationDescription.disabledFacilities ? <span><span className="Hotel_Feature_Item_Title">disabled Facilities</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.disabledFacilitiesNote}</span></span> : null }
         {this.props.card.accommodationDescription.concierge ? <span><span className="Hotel_Feature_Item_Title">concierge</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.conciergeNote}</span></span> : null }
         {this.props.card.accommodationDescription.sportsFacilities ? <span><span className="Hotel_Feature_Item_Title">sports Facilities</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.sportsFacilitiesNote}</span></span> : null }
         {this.props.card.accommodationDescription.watersports ? <span><span className="Hotel_Feature_Item_Title">watersports</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.watersportsNote}</span></span> : null }
         {this.props.card.accommodationDescription.scubaDiving ? <span><span className="Hotel_Feature_Item_Title">scuba Diving</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.scubaDivingNote}</span></span> : null }
         {this.props.card.accommodationDescription.tennis ? <span><span className="Hotel_Feature_Item_Title">tennis</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.tennisNote}</span></span> : null }
         {this.props.card.accommodationDescription.gymnasium ? <span><span className="Hotel_Feature_Item_Title">gymnasium</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.gymnasiumNote}</span></span> : null }
         {this.props.card.accommodationDescription.golf ? <span><span className="Hotel_Feature_Item_Title">golf</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.golfNote}</span></span> : null }
         {this.props.card.accommodationDescription.horseriding ? <span><span className="Hotel_Feature_Item_Title">horse riding</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.horseridingNote}</span></span> : null }
         {this.props.card.accommodationDescription.squash ? <span><span className="Hotel_Feature_Item_Title">squash</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.squashNote}</span></span> : null }
         {this.props.card.accommodationDescription.otherFacilities ? <span><span className="Hotel_Feature_Item_Title">other Facilities</span><span className="Hotel_Feature_Item_Note">{this.props.card.accommodationDescription.otherFacilitiesNote}</span></span> : null }

         </div>
</div>
        );

    }


    render() {
        let contents = (this.props.card.accommodationDescription === undefined || this.props.card.accommodationDescription === null )
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span>
                {contents}

            </span>


        );//return
    }//render



}