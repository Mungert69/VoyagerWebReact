import React, { Component } from 'react';
import Flickity  from 'react-flickity-component'
export class ImageView extends Component {

    render() {
        const flickityOptions = {
            initialIndex: 2
        };
if (this.props.card === undefined || this.props.card === null) return null;
     
        if (this.props.card.picFileNames === undefined || this.props.card.picFileNames === null) return null;
        const props = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            fade: true,
            pauseOnHover: true,
            swipeToSlide: true,
            slidesToShow: 99,
            slidesToScroll: 1,
            draggable: true,
            imagesLoaded: true,


        };
        return (
            <div>

<Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
    >{
     this.props.card.picFileNames.map((fileName, index) =>  
                    <img  src={'http://www.voyagercuba.co.uk/Images/Images-PlacesHotels/'+  fileName} />
                    

                            )
    }
    </Flickity>
     

               
            </div>
        );
    }
}