import React, { Component } from 'react';
import { Button } from 'antd';

export class TripNavView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };

    }



    renderButtons = () => {

        return (
            <Button>Nice Buttons</Button>
        );//return
    }//renderButtons

    render() {

        return (
            <div >
                {this.renderButtons()}
            </div>
        );//return
    }//render


}
