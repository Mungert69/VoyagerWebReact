import React, { Component } from 'react';
import { Carousel, Collapse } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { AccommodationRoomSpecification } from './SubComponents/AccommodationRoomSpecification';
import { AccommodationCharacteristics } from './SubComponents/AccommodationCharacteristics';
import { AccommodationDescription } from './SubComponents/AccommodationDescription';
import { AccommodationAllInclusiveFacilities } from './SubComponents/AccommodationAllInclusiveFacilities';
import { AccommodationSelfCater } from './SubComponents/AccommodationSelfCater';


export class CardStaticView extends Component {

    constructor(props) {
        super(props);
       
    }

    shouldComponentUpdate(nextProps) {
        if (this.props.card.title !== nextProps.card.title) {
          return true;
        }
        return false;
      }

    renderCardView = () => {
      
        var cardDescription = '';
        if (this.props.styleCard.card1ElementDescription === 1) { cardDescription = this.props.card.descriptionShort; }
        if (this.props.styleCard.card1ElementDescription === 2) { cardDescription = this.props.card.descriptionLong; }
        const Panel = Collapse.Panel;
       

              return (
   
             <span>

                 
             
<span className={this.props.styleCard.card1ElementTitleStyle} >{this.props.card.title}</span>
                        <span className="Show"> <span className={this.props.styleCard.card1ElementCountryStyle}>{this.props.card.subtitle}  {this.props.card.country}</span></span>
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

                                } className="Voyager_Card_Container_Trip_Details AnimationRipple" showArrow={false} >
                 
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
                    
        
             </span>
            
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
