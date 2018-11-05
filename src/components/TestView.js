import { Carousel } from 'antd';
import React, { Component } from 'react';

export class TestView extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }
    next() {
        //this.carousel.next();
        this.carousel.goTo(3);
    }
    previous() {
        this.carousel.prev();
    }
    render() {
        const props = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div>
                <Carousel ref={node => this.carousel = node} {...props}>
                    <div key={1}><h3 className="Voyager_Card_Image_Carousel"><p>test</p><p>test2</p></h3></div>
                    <div key={2}><h3>2</h3></div>
                    <div key={3}><h3>3</h3></div>
                    <div key={4}><h3>4</h3></div>
                    <div key={5}><h3>5</h3></div>
                    <div key={6}><h3>6</h3></div>
                </Carousel>
                <div style={{ textAlign: 'center' }}>
                    <button className='button' onClick={this.previous}>Previous</button>
                    <button className='button' onClick={this.next}>Next</button>
                </div>
            </div>
        );
    }
}