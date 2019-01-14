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
        if (this.props.card === undefined || this.props.card === null) return null;
     
        if (this.props.card.picFileNames === undefined || this.props.card.picFileNames === null) return null;
        const props = {
            dots: true,
            infinite: true,
            speed: 500,
            autoplay: true,
            fade: true,
            pauseOnHover: true,
            swipeToSlide: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            draggable: true,



        };
        return (
            <div className="Voyager_Card_Image_Carousel">

                <div className="AnimationRipple">
                    <Carousel ref={node => this.carousel = node} {...props}>
                        {
                            this.props.card.picFileNames.map((fileName, index) =>  
                    <div key={index}><img className='Voyager_Card_Image_Rounded' src={'http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/'+  fileName} /></div>
                    

                            )
                        }
                   </Carousel>
                    </div>
           <div className='Voyager_Card_Image_Carousel_Controls'>
                    <a onClick={ () => this.previous}><i className="fas fa-caret-left Voyager_Card_Image_Carousel_Controls_Previous"></i></a>
                    <a onClick={() => this.map}> <i className="fas fa-map Voyager_Card_Image_Carousel_Controls_Map"></i></a>
                    <a onClick={() => this.next}><i className="fas fa-caret-right Voyager_Card_Image_Carousel_Controls_Next"></i></a>
           </div>

               
            </div>
        );
    }
}