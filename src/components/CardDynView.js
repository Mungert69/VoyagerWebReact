import React, { Component } from 'react';
import { Carousel, Collapse } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { AccommodationRoomSpecification } from './SubComponents/AccommodationRoomSpecification';
import { AccommodationCharacteristics } from './SubComponents/AccommodationCharacteristics';
import { AccommodationDescription } from './SubComponents/AccommodationDescription';
import { AccommodationAllInclusiveFacilities } from './SubComponents/AccommodationAllInclusiveFacilities';
import { AccommodationSelfCater } from './SubComponents/AccommodationSelfCater';
import { CardStaticView } from './CardStaticView';


export class CardDynView extends Component {

    constructor(props) {
        super(props);
       
    }

   

    renderCardView = () => {
       if (this.props.card === undefined || this.props.card === null) { return; }
         if (this.props.styleCard === undefined || this.props.styleCard === null) { return; }
        
         var carouselToggle = false;
        if (this.props.styleCard.card1ElementImageTemplate === 1) { carouselToggle = true; }
 let url = 'http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/';
        let urlMapStart = 'http://maps.googleapis.com/maps/api/staticmap?zoom=9&size=300x180&maptype=roadmap&markers=icon:http://voyagercuba.co.uk:10205/images/Images-Maps-Icon/map-marker-static.png|';
        let urlMapEnd = '&key=AIzaSyAww7cMvMFsHfWR6m0eSbFsOltKyeKyzCk';
        let urlMap = urlMapStart + this.props.card.latitude + ',' + this.props.card.longitude + urlMapEnd;
      

        return (
   
            <div className="percentageWidth100 ">
            <div className="Voyager_Card_A_Container AnimationRipple">
                <span >
                     {carouselToggle ?
                        <div className="Hide">
                        <Carousel className="Voyager_Card_Image_Carousel" effect="fade" easing="linear" infinite="true" arrows="true" swipeToSlide="true">
                            <div><img className="Voyager_Card_Image_Rounded" src={url + this.props.card.picFileName} /></div>
                            <div><img className="Voyager_Card_Map" src={urlMap} /></div>
                            </Carousel>
                       
                            </div>
                        : null
                    }
                    <div>   
              
                               
                    <span className="Card_Map_Panel_Key">
                        <i className="fas fa-circle Card_Key_Icon"></i>
                        <span key="Card_Key_Text" className="Show Card_Key_Text">19{this.props.index}</span>
                                            

                    </span>
                    <CardStaticView card={this.props.card} styleCard={this.props.styleCard}/>>
            
                 </div>
              </span>

                    <div className="Show">

                        <a className="Voyager_Trip_Control_Nights_remove" title="SUBTRACT NIGHTS" onClick={() => this.props.removeNight(this.props.index)} ><i className="fas fa-angle-down Voyager_Trip_Nights_Subtract"></i></a>
                        {this.props.itinObj.prSelections[this.props.index].nights}
                        <a className="Voyager_Trip_Control_Nights_add" title="ADD NIGHTS" onClick={() => this.props.addNight(this.props.index)} ><i className="fas fa-angle-up Voyager_Trip_Nights_Add"></i></a>
                       
                        <p className="Voyager_Trip_Transfer" > {this.props.itinObj.transferNodeItems[this.props.index + 1].transferItem
                            .transferItem1}</p>

                    </div>
                     
            </div>
            </div>

            
        );//return
    }//renderCardView
    render() {
        return (
            <div>
            {this.renderCardView()}
            </div>
        );//return
    }//render


}
