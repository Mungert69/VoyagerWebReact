import { Carousel } from 'antd';
import React, { Component } from 'react';
export class ImageView extends Component {
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
                        {
                            this.props.card.picFileNames((fileName, index) => { 
                                <div key={index}><img className='Voyager_Card_Image_Rounded' src='http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/{fileName}' /></div>
                    

                            })
                        }
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