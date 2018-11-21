import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';


export class Control_Trip_Stages extends Component {

    render() {
        return (



<div>


 <PerfectScrollbar className="Control_Trip_Stages_Scrollbar">
  


<div className="Control_Trip_Stages AnimationRipple">
<a className="Control_Trip_Stages_Item_Group ">
<div class="Control_Trip_Stages_Position_outer_wrapper">
<div className="Control_Trip_Stages_Position_left Control_Trip_Stages_Position_inner_wrapper">
<i className="show fas fa-circle Control_Trip_Stages_Stage_Icon"><l className="Control_Trip_Stages_Stage_Icon_Number">1(index)</l></i>
                       
<span className="Control_Trip_Stages_Stage_PlaceName">Havana( prSelection.place)</span>
</div>

<div className="Control_Trip_Stages_Position_right Control_Trip_Stages_Position_inner_wrapper">
<span className="Control_Trip_Stages_Stage_HotelName">Palacio Marques Felipe( prSelection.hotel)</span>
</div>
</div>
<div class="Control_Trip_Stages_Position_outer_wrapper">
<div className="Control_Trip_Dates_Position_left Control_Trip_Stages_Position_inner_wrapper">
<i className="show far fa-car Control_Trip_Stages_Stage_Transport_Icon"></i>
<i className="hide far fa-bus Control_Trip_Stages_Stage_Transport_Icon"></i>
</div>

<div className="Control_Trip_Stages_Position_right Control_Trip_Stages_Position_inner_wrapper">
<span className="Control_Trip_Stages_Stage_HotelFeatures">CITY CENTRE - SMALL HOTEL - HERITAGE - £££</span>
<i className="show fas fa-moon Control_Trip_Stages_Stage_Nights_Icon">(prSelection.Control_Trip_Stages_Stage_Nights_Icon)</i>
</div>
</div>
</a><div>
</div>
<a><i className="show fas fa-caret-right Control_Trip_Stages_Stage_Detail_Icon"></i></a>

</div>





</PerfectScrollbar>

</div>

        );
    }
}