import React, { Component } from 'react';
import { Carousel, Collapse } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { AccommodationRoomSpecification } from './SubComponents/AccommodationRoomSpecification';
import { AccommodationCharacteristics } from './SubComponents/AccommodationCharacteristics';
import { AccommodationDescription } from './SubComponents/AccommodationDescription';
import { AccommodationAllInclusiveFacilities } from './SubComponents/AccommodationAllInclusiveFacilities';
import { AccommodationSelfCater } from './SubComponents/AccommodationSelfCater';


export class CardView extends Component {

    constructor(props) {
        super(props);
        this.state = {
             loading: true
        };
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.card.title !== nextProps.card.title) {
          return true;
        }
        return false;
      }

    renderCardView = () => {
       if (this.props.card === undefined || this.props.card === null) { return; }
         if (this.props.styleCard === undefined || this.props.styleCard === null) { return; }
        var carouselToggle = false;
        if (this.props.styleCard.card1ElementImageTemplate === 1) { carouselToggle = true; }

        var cardDescription = '';
        if (this.props.styleCard.card1ElementDescription === 1) { cardDescription = this.props.card.descriptionShort; }
        if (this.props.styleCard.card1ElementDescription === 2) { cardDescription = this.props.card.descriptionLong; }


        let url = 'http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/';
        let urlMapStart = 'http://maps.googleapis.com/maps/api/staticmap?zoom=9&size=300x180&maptype=roadmap&markers=icon:http://voyagercuba.co.uk:10205/images/Images-Maps-Icon/map-marker-static.png|';
        let urlMapEnd = '&key=AIzaSyAww7cMvMFsHfWR6m0eSbFsOltKyeKyzCk';
        let urlMap = urlMapStart + this.props.card.latitude + ',' + this.props.card.longitude + urlMapEnd;
        const Panel = Collapse.Panel;
        const customPanelStyle = {

        };


        return (
   
            <div className="percentageWidth100 ">
            <div className="Voyager_Card_A_Container">
                <span >
                     {carouselToggle ?
                        <div>
                        <Carousel className="Voyager_Card_Image_Carousel" effect="fade" easing="linear" infinite="true" arrows="true" swipeToSlide="true">
                            <div><img className="Voyager_Card_Image_Rounded" src={url + this.props.card.picFileName} /></div>
                            <div><img className="Voyager_Card_Map" src={urlMap} /></div>
                            </Carousel>
                       
                            </div>
                        : null
                    }
                    <div>   
              
                           
                        <span className={this.props.styleCard.card1ElementTitleStyle} >{this.props.card.title}</span>
                        <span className="Show"> <span className={this.props.styleCard.card1ElementCountryStyle}>placename - {this.props.card.country}</span></span>
                        <AccommodationCharacteristics card={this.props.card}/>
 <span className="Hide"><span className={this.props.styleCard.card1ElementHotelFeaturesStyle}>{this.props.card.hotelFeatures}</span></span>
 <span className="Hide"><span className={this.props.styleCard.card1ElementPlaceFeaturesStyle}>{this.props.card.placeFeatures}</span></span>
                        <span className={this.props.styleCard.card1ElementPlaceFeaturesStyle}>havana - Varadero - Sancti Spiritus - Guardalavaca - Pinar del Rio - Baracoa</span>
                        <span className={this.props.styleCard.card1ElementCategoriesStyle}>{this.props.card.categories}</span>
                        <span className={this.props.styleCard.card1ElementTagsStyle}>{this.props.card.tags}</span>
                        <span className={this.props.styleCard.card1ElementIdStyle}>{this.props.card.Id}</span>
 



                        <Collapse className="Hide" bordered={false} defaultActiveKey={['1']} >
                            <Panel header={
                   
                                <div className="Voyager_Card_Container_Trip_Details_SubPanel1">
     <i className="fas fa-caret-down Control_Icon_Expand"></i> 
                                </div>

                                } className="Voyager_Card_Container_Trip_Details AnimationRipple" showArrow={false} style={customPanelStyle}>
                 
                             <AccommodationDescription card={this.props.card}/>             
                            <AccommodationRoomSpecification card={this.props.card}/>                          
                            <AccommodationSelfCater card={this.props.card}></AccommodationSelfCater>
                            <AccommodationAllInclusiveFacilities card={this.props.card}></AccommodationAllInclusiveFacilities>


                                        <div className="Hide Voyager_Card_Container_Follow_User AnimationRipple">
                        <div className="Voyager_Card_Container_Follow_User_SubPanel ">
                        <div className="Show" title="">
                                    <a ><span className={this.props.styleCard.card1ElementPlaceFeaturesStyle}>Explore {this.props.card.title} Hotels</span></a>
                        </div>
                        </div>
                        </div>
                        
                        <div className="Hide Voyager_Card_Container_Follow_User AnimationRipple">
                        <div  className="Voyager_Card_Container_Follow_User_SubPanel ">
                        <div  className="Show" title="">
                        <a ><span className={this.props.styleCard.card1ElementPlaceFeaturesStyle}>Explore BEN19743 trips</span></a>
                        </div>
                        </div>
                        </div>
            
            
            
            
            
               
                  
                            <div className="Voyager_Card_Content_Container" />
                            <p className={this.props.styleCard.card1ElementDescriptionStyle}>{cardDescription}</p>
                          
              

   <span className={this.props.styleCard.card1ElementPlaceFeaturesStyle}>CAT1 - CAT2 - CAT3 - CAT4</span>
                            <span className={this.props.styleCard.card1ElementPlaceFeaturesStyle}>TAG1 - TAG2 - TAG3 - TAG4</span>
                    
            
            
                        </Panel>


            
                        </Collapse>
                    
        
                 </div>
              </span>


                     
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
