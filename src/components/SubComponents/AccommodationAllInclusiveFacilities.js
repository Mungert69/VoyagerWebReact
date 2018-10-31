import React, { Component } from 'react';

export class AccommodationAllInclusiveFacilities extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
            <span>
            {
           this.props.card.accommodationAllInclusiveFacilities.snacks ? <span>Snacks</span> : null

       }
       </span>
        );

    }


    render() {
        let contents = (this.props.card.accommodationAllInclusiveFacilities === undefined || this.props.card.accommodationAllInclusiveFacilities === null )
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span>
                {contents}

            </span>


        );//return
    }//render



}