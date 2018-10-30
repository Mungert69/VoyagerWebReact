import React, { Component } from 'react';

export class AccommodationCharacteristics extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
            <span>
                 {
                this.props.card.accommodationCharacteristics.modern ? <span>Modern</span> : null

            }
            </span>
           
           
            
           

        );

    }


    render() {
        let contents = (this.props.card.accommodationCharacteristics === undefined)
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span>
                {contents}

            </span>


        );//return
    }//render



}