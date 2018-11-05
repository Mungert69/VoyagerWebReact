import React, { Component } from 'react';
import { Carousel } from 'antd';


export class CardTripMapView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };

    }



    renderCardView = () => {
        if (this.props.selection === undefined || this.props.selection === null) { return; }
        if (this.props.styleCard === undefined || this.props.styleCard === null) { return; }

        var urlStart = 'http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/';
        //if (this.props.card === undefined || this.props.card === null) { return; }
        var carouselToggle = false;
        if (this.props.styleCard.card1ElementImageTemplate === 1) { carouselToggle = true; }

        var cardDescription = '';
        if (this.props.styleCard.card1ElementDescription === 1) { cardDescription = this.props.selection.placeCard.descriptionShort; }
        if (this.props.styleCard.card1ElementDescription === 2) { cardDescription = this.props.selection.placeCard.descriptionLong; }
        var panel2Css = '';
        if (parseInt(this.props.detailLevel) > 3) {
            panel2Css = 'Hide Card_Map_Panel_2';

        }
        else {
            panel2Css = 'Show Card_Map_Panel_2';
        }

        return (


            <div>
                <div>

                    <span className="Card_Map_Panel_1">
                        <i className="fas fa-map-marker Card_Map_Logic_Icon_1"></i>
                        <span key="Card_Map_Stage" className="Show Card_Map_Stage">{this.props.index}</span>
                    </span>

                    <div  className={panel2Css}>
                        <span className="Show"><span className={this.props.styleCard.Card1ElementTitleStyle}>{this.props.selection.hotelCard.title}</span></span>
                        <span className="Show"><span className={this.props.styleCard.Card1ElementTitleStyle}>{this.props.selection.hotelCard.subtitle}<span key="Card_Map_Night" className="Hide"><i className="fas fa-moon Card_Map_Night_Icon"></i><span className="Card_Map_Night_Text">2</span></span></span></span>
                        <span><p className={this.props.styleCard.Card1ElementDescriptionStyle}>{cardDescription}</p></span>
                        <span><p className={this.props.styleCard.Card1ElementHotelFeaturesStyle}>{this.props.selection.hotelCard.hotelFeatures}</p></span>
                        <span><p className={this.props.styleCard.Card1ElementPlaceFeaturesStyle}>{this.props.selection.placeCard.placeFeatures}</p></span>


                    </div>
                    {carouselToggle === true ?

                        <div className="Card_Map_Image_Panel">
                            <div>
                                < Carousel autoplay dots='false' >
                                    {this.props.selection.placeCard.picFileNames.map((pic, index) =>
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
