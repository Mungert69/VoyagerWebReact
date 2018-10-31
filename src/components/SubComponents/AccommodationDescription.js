import React, { Component } from 'react';

export class AccommodationDescription extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
            <span> Description Note :: {this.props.card.accommodationDescription.descriptionNote} </span>

        );

    }


    render() {
        let contents = (this.props.card.accommodationDescription === undefined || this.props.card.accommodationDescription === null )
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span>
                {contents}

            </span>


        );//return
    }//render



}