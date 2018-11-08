import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export class Control_3 extends Component {

    render() {
        return (



            <div>

                        <div className="Control_3_1">

<div  className="flex-container">
<div  className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('country')}>
            <i className="fas fa-globe-americas Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >country</span>
        </a>
    </div>

    <div  className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('trip')}>
            <i className="fas fa-map-marked Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >trips</span>
        </a>
    </div>

    <div  className="Show">
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('place')}>
            <i className="fas fa-map-marker Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >places</span>
        </a>
    </div>

    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('hotel')}>
            <i className="fas fa-home Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >hotels</span>
        </a>
    </div>


    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('hotel')}>
            <i className="fas fa-book-open Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >info</span>
        </a>
    </div>


    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('profiles')}>
            <l></l>
            <i className="fas fa-users Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >profiles</span>
        </a>
    </div>
</div>
</div>
            </div>




        );
    }
}