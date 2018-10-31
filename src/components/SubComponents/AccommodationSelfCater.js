import React, { Component } from 'react';

export class AccommodationSelfCater extends Component {

    constructor(props) {
        super(props);

    };

    renderHtml() {

        return (
            <span>
            {
           this.props.card.accommodationSelfCater.shower ? <span>Shower</span> : null

       }
       </span>
        );

    }


    render() {
        let contents = (this.props.card.accommodationSelfCater === undefined || this.props.card.accommodationSelfCater === null )
            ? null : <span>{this.renderHtml()}></span>;
      

        return (
            <span>
                {contents}

            </span>


        );//return
    }//render



}