import { Carousel } from 'antd';
import React, { Component } from 'react';
export class ImageCarousel extends Component {
    constructor(props) {
        super(props);
       
    };
    next = () => {
        //this.carousel.next();
        this.carousel.next();
    };
    previous = () => {
        this.carousel.prev();
    };

    map = () => {
        //this.carousel.next();
        this.carousel.goTo(0);
    };
    
    render() {
        const props = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            fade: true,
            pauseOnHover: true,
            swipeToSlide: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            draggable: true,



        };
        return (
            <div className="Voyager_Card_Image_Carousel">

                <div className="AnimationRipple">
                    <Carousel ref={node => this.carousel = node} {...props}>
                        <div key={0}><img className="Voyager_Card_Image_Rounded" src="http://maps.googleapis.com/maps/api/staticmap?zoom=14&size=600x400&maptype=roadmap&markers=icon:http://voyagercuba.co.uk/images/Images-Maps-Icon/trip_hotel_true.png|23.113593,-82.366596&key=AIzaSyAww7cMvMFsHfWR6m0eSbFsOltKyeKyzCk" /></div>
                    <div key={1}><img className="Voyager_Card_Image_Rounded" src="http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/HAVANAinglaterraFromAcrossSquareWithOldBlueCar.jpg" /></div>
                    <div key={2}><img className="Voyager_Card_Image_Rounded" src="http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/HAVANAsanFelipeExterior3.JPG" /></div>
                    <div key={3}><img className="Voyager_Card_Image_Rounded" src="http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/HAVANAplazaVieja21.jpg" /></div>
                    <div key={4}><img className="Voyager_Card_Image_Rounded" src="http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/VINALESGeneralVista2.JPG" /></div>
                    <div key={5}><img className="Voyager_Card_Image_Rounded" src="http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/VINALESfarmhouse11.JPG" /></div>
                    <div key={6}><img className="Voyager_Card_Image_Rounded" src="http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/CIENFEUGOSjaguaPuntaViewedFromJagua.jpg" /></div>
                    </Carousel>
                    </div>
           <div className='Voyager_Card_Image_Carousel_Controls'>
                    <a onClick={ () => this.previous}><i className="fas fa-angle-left Voyager_Icon_Base_1"></i></a>
                    <a onClick={() => this.map}> <i className="fas fa-map Voyager_Icon_Base_1"></i></a>
                    <a onClick={() => this.next}><i className="fas fa-angle-right Voyager_Icon_Base_1"></i></a>
           </div>

               
            </div>
        );
    }
}