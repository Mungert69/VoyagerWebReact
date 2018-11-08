import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export class Control_Share extends Component {

    render() {
        return (



            <div>

                        <div className="Control_3_1">

<div  className="flex-container">
    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('share_close')}>
            <i className="fas fa-times Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >close</span>
        </a>
    </div>
    <div  className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('share_facebook')}>
            <i className="fab fa-facebook-f Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >facebook</span>
        </a>
    </div>

    <div  className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('share_instagram')}>
            <i className="fab fa-instagram Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >instagram</span>
        </a>
    </div>

    <div  className="Show">
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('share_pinterest')}>
            <i className="fab fa-pinterest-p Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >pinterest</span>
        </a>
    </div>

    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('share_twitter')}>
            <i className="fab fa-twitter Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >twitter</span>
        </a>
    </div>


    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('share_now')}>
            <l></l>
            <i className="fas fa-share-alt Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >share</span>
        </a>
    </div>
</div>
</div>
            </div>




        );
    }
}