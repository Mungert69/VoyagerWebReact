import React, { Component } from 'react';
import { Button } from 'antd';


export class TripScrollView extends Component {
    constructor(props) {
        super(props);
        
    }

    

    back() {
      
            if (this.props.item < 0) {
                     this.props.setItem(this.props.itemNumber);
             
            }
            else {
                this.props.setItem(this.props.item-1);
            }
     

    }
    forward() {
        if (this.props.item > this.props.itemNumber) {
            this.props.setItem(0);

        }
        else {
            this.props.setItem(this.props.item + 1);
        }


    }
    render() {
        return (
            <div >
                <Button onClick={() => this.back()} >Back</Button><Button onClick={() => this.forward()}>Forward</Button>
            </div>
        );
    }
}
