import React, { Component } from 'react';

export class AccommodationAllInclusiveFacilities extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
            <div className="Hotel_Feature_Panel" >
   <span className="Hotel_Feature_Title">all inclusive</span>
            {this.props.card.accommodationAllInclusiveFacilities.buffetMeals ? <span className="Hotel_Feature_Item_Title">buffet Meals</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationAllInclusiveFacilities.buffetMealsNote}</span>
            {this.props.card.accommodationAllInclusiveFacilities.aLaCarte ? <span className="Hotel_Feature_Item_Title">aLaCarte</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationAllInclusiveFacilities.aLaCarteNote}</span>
            {this.props.card.accommodationAllInclusiveFacilities.snacks ? <span className="Hotel_Feature_Item_Title">snacks</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationAllInclusiveFacilities.snacksNote}</span>
            {this.props.card.accommodationAllInclusiveFacilities.localDrinks ? <span className="Hotel_Feature_Item_Title">local Drinks</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationAllInclusiveFacilities.localDrinksNote}</span>
            {this.props.card.accommodationAllInclusiveFacilities.internationalDrinks ? <span className="Hotel_Feature_Item_Title">international Drinks</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationAllInclusiveFacilities.internationalDrinksNote}</span>
            {this.props.card.accommodationAllInclusiveFacilities.daytimeActivities ? <span className="Hotel_Feature_Item_Title">daytime Activities</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationAllInclusiveFacilities.daytimeActivitiesNote}</span>
            {this.props.card.accommodationAllInclusiveFacilities.aIEveningEntertainment ? <span className="Hotel_Feature_Item_Title">Evening Entertainment</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationAllInclusiveFacilities.aIEveningEntertainmentNote}</span>
            {this.props.card.accommodationAllInclusiveFacilities.nonMotorisedWatersports ? <span className="Hotel_Feature_Item_Title">non Motorised Watersports</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationAllInclusiveFacilities.nonMotorisedWatersportsNote}</span>
            {this.props.card.accommodationAllInclusiveFacilities.motorisedWatersports ? <span className="Hotel_Feature_Item_Title">Motorised Watersports</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationAllInclusiveFacilities.motorisedWatersportsNote}</span>
            {this.props.card.accommodationAllInclusiveFacilities.aIScubaDiving ? <span className="Hotel_Feature_Item_Title">Scuba Diving</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationAllInclusiveFacilities.aIScubaDivingNote}</span>
            {this.props.card.accommodationAllInclusiveFacilities.otherFeatures ? <span className="Hotel_Feature_Item_Title">other Features</span> : null }<span className="Hotel_Feature_Item_Note">{this.props.card.accommodationAllInclusiveFacilities.otherFeaturesNote}</span>
            
            </div>
        );

    }


    render() {
        let contents = (this.props.card.accommodationAllInclusiveFacilities === undefined || this.props.card.accommodationAllInclusiveFacilities === null )
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span>
                {contents}

            </span>


        );//return
    }//render



}