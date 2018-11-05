import { Carousel } from 'antd';
import React, { Component } from 'react';
import Gallery from '../components/Gallery';
import CustomSpinner from '../components/Spinner';


export class ImageCarouselLightbox extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.map = this.map.bind(this);
    }
    next() {
        //this.carousel.next();
        this.carousel.next();
    }
    previous() {
        this.carousel.prev();
    }

    map() {
        //this.carousel.next();
        this.carousel.goTo(0);
    }
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
            draggable: true
        };


        function makeUnsplashSrc(id) {
            return `http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/${id}`;
        }
        function makeUnsplashSrcSet(id) {
            return `http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/${id}`;
        }
        function makeUnsplashThumbnail(id) {
            return `http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/${id}`;
        }


        const THEMED_IMAGES = [
            { id: 'CIENFEUGOSjaguaPuntaViewedFromJagua.jpg', caption: 'HAVANA - CUBA', orientation: 'landscape', useForDemo: true }, 
            { id: 'HAVANAinglaterraFromAcrossSquareWithOldBlueCar.jpg', caption: 'HAVANA - CUBA', orientation: 'landscape', useForDemo: true },
            { id: 'HAVANAsanFelipeExterior3.JPG', caption: 'HAVANA - CUBA', orientation: 'landscape', useForDemo: true },
            { id: 'HAVANAplazaVieja21.jpg', caption: 'HAVANA - CUBA', orientation: 'landscape', useForDemo: true },
            { id: 'VINALESGeneralVista2.JPG', caption: 'HAVANA - CUBA', orientation: 'landscape', useForDemo: true }
        ];
  

        const theme = {
            // container
            container: {
                background: 'rgba(255, 255, 255, 0.9)',



            },

            // arrows
            arrow: {
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                fill: '#222',
                opacity: 0.6,
                transition: 'opacity 200ms',

                ':hover': {
                    opacity: 1,
                },
            },
            arrow__size__medium: {
                borderRadius: 40,
                height: 40,
                marginTop: -20,

                '@media (min-width: 768px)': {
                    height: 70,
                    padding: 15,
                },
            },
            arrow__direction__left: { marginLeft: 10 },
            arrow__direction__right: { marginRight: 10 },
            close: {
                fill: '#666',
                opacity: 0.6,
                transition: 'all 200ms',
                ':hover': {
                    opacity: 1,
                },
            },

            // footer
            footer: {
                color: '#666',
                align:'center'
           
            },
            footerCount: {
                color: 'rgba(0, 0, 0, 0.6)',
            },

            // thumbnails
            thumbnail: {
      
            },
            thumbnail__active: {
                boxShadow: '0 0 0 3px #666',
            },
        };




        return (

            <div >

                <Gallery  images={THEMED_IMAGES.map(({ caption, id, orientation, useForDemo }) => ({
                    src: makeUnsplashSrc(id),
                    thumbnail: makeUnsplashThumbnail(id, orientation),  
                    caption,
                    orientation,
                    useForDemo,


                }))}
                    theme={theme}
                    spinner={CustomSpinner}
                    spinnerColor={'#D40000'}
                    spinnerSize={150}
                    showThumbnails
                    backdropClosesModal
                  
                />
        
            
                <div>

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
                            <a onClick={this.previous}><i className="fas fa-angle-left Voyager_Icon_Base_1"></i></a>
                            <a onClick={this.map}> <i className="fas fa-map Voyager_Icon_Base_1"></i></a>
                            <a onClick={this.next}><i className="fas fa-angle-right Voyager_Icon_Base_1"></i></a>
                        </div>


                    </div>


                </div>
                
     </div>
        );
    }
}