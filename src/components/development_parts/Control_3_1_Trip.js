import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export class Control_3_1_Trip extends Component {

    render() {
        return (



            <div>



                        <div className="Control_3_1">

<div  className="flex-container">
<div className="Show" >
        <a className="Voyager_Control_Item_A">
            <i className="fas fa-map-marker-plus Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >add</span>
        </a>
    </div>

        <div className="Show" >
        <a className="Voyager_Control_Item_A">
            <i className="fas fa-map-marker-minus Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >remove</span>
        </a>
    </div>

<div className="Show" title="">
                        <a className="Voyager_Control_Item_A">
                            <i className="fas fa-home Voyager_Control_Icon_Layer_Stack_Small"></i>
                            <i className="show far fa-sync-alt Voyager_Control_Icon_Layer_Stack_Large" title="change hotel"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >hotel</span>
                        </a>
                    </div>

    <div className="Show" title="">
                        <a className="Voyager_Control_Item_A">
                            <i className="fas fa-moon Voyager_Control_Icon_Layer_Stack_Small"></i>
                            <i className="show far fa-sync-alt Voyager_Control_Icon_Layer_Stack_Large" title="modify nights"></i>
                            <span className="Voyager_Control_Text_Size_1_Link" >nights</span>
                        </a>
                    </div>

 <div key="Control_Trip_Stage_Transport" className="show" title="">
                        <a className="Voyager_Control_Item_A" >
                            <span>
                                <i className="fas fa-car Voyager_Control_Icon_Layer_Sidebyside"></i>
                                <i className="fas fa-bus Voyager_Control_Icon_Layer_Sidebyside"></i>
                            </span>
                            <span className="Voyager_Control_Text_Size_1_Link" >transport</span>
                        </a>
                    </div>


    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('hotel')}>
            <i className="fas fa-check Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >update</span>
        </a>
    </div>


  
</div>




<div>

<div  className="flex-container">
<div  className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('allTrips')}>
            <i className="fas fa-map-marked Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >all trips</span>
        </a>
    </div>

    <div  className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('share')}>
            <i className="fas fa-share-alt Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >share</span>
        </a>
    </div>

    <div  className="Show">
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('save')}>
            <i className="fas fa-heart Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >save</span>
        </a>
    </div>

    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('date')}>
            <i className="fas fa-calendar-alt Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >date</span>
        </a>
    </div>


    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('flights')}>
            <i className="fas fa-plane Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >flights</span>
        </a>
    </div>


    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('message')}>
            <l></l>
            <i className="fas fa-comment-alt Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >message</span>
        </a>
    </div>
</div>
</div>

</div>

















            </div>




        );
    }
}