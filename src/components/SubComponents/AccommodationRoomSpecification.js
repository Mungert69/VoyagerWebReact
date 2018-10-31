import React, { Component } from 'react';

export class AccommodationRoomSpecification extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
            <span> Room Sharing :: {this.props.card.accommodationRoomSpecification.roomSharingNote} </span>

        );

    }


    render() {
        let contents = (this.props.card.accommodationRoomSpecification === undefined || this.props.card.accommodationRoomSpecification===null
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span>
                {contents}

            </span>


        );//return
    }//render



}