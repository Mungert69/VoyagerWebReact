import React, { Component } from 'react';
import { Carousel } from 'antd';


export class CardMapView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };

    }



    renderCardView = () => {
        if (this.props.card === undefined || this.props.card === null) { return; }
        if (this.props.styleCard === undefined || this.props.styleCard === null) { return; }

        var urlStart = 'http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/';
        //if (this.props.card === undefined || this.props.card === null) { return; }
        var carouselToggle = false;
        if (this.props.styleCard.card1ElementImageTemplate === 1) { carouselToggle = true; }

        var cardDescription = '';
        if (this.props.styleCard.card1ElementDescription === 1) { cardDescription = this.props.card.descriptionShort; }
        if (this.props.styleCard.card1ElementDescription === 2) { cardDescription = this.props.card.descriptionLong; }


        return (


            <div>
                <div>

                    <span key="Card_Map_Panel_1" className="Card_Map_Panel_1">
                        <i className="fas fa-map-marker Card_Map_Logic_Icon_1"></i>
                        <span key="Card_Map_Stage" className="Show Card_Map_Stage">1</span>
                    </span>
                    <div key="Card_Map_Panel_2" className="Show Card_Map_Panel_2">
                        <span className="Show"><span className={this.props.styleCard.card1ElementTitleStyle}>{this.props.card.title}</span></span>
                        <span className="Hide"><span className={this.props.styleCard.card1ElementTitleStyle}>{this.props.card.subtitle}<span key="Card_Map_Night" className="Show"><i className="fas fa-moon Card_Map_Night_Icon"></i><span className="Card_Map_Night_Text">2</span></span></span></span>
                        <span><p className={this.props.styleCard.card1ElementDescriptionStyle}>{cardDescription}</p></span>
                        <span><p className={this.props.styleCard.card1ElementHotelFeaturesStyle}>{this.props.card.hotelFeatures}</p></span>
                        <span><p className={this.props.styleCard.card1ElementPlaceFeaturesStyle}>{this.props.card.placeFeatures}</p></span>


                    </div>
                    {carouselToggle === true ?
                        
                        <div key="Card_Map_Image_Panel" className="Card_Map_Image_Panel">
                            <div>
                                < Carousel autoplay dots='false' >
                                    {this.props.card.picFileNames.map((pic, index) =>
                                        <div key={index}><img className="Card_Map_Image" src={urlStart + pic} /></div>

                                    )}
                                </Carousel>
                            </div>
                        </div>
                        : null
                    }
                   
                </div>
            </div>

        );//return
    }//renderCardView

    render() {

        return (
            <div >
                {this.renderCardView()}
            </div>
        );//return
    }//render


}
