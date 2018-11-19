import React, { Component } from "react";
import {Collapse } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

import { Control_Item_Place_Name } from './Control_Item/Control_Item_Place_Name';
import { Control_Item_Place_Features } from './Control_Item/Control_Item_Place_Features';

import { Control_Item_Hotel_Name } from './Control_Item/Control_Item_Hotel_Name';
import { Control_Item_Hotel_Features } from './Control_Item/Control_Item_Hotel_Features';
import { Control_Item_Hotel_Place_Country_Name } from './Control_Item/Control_Item_Hotel_Place_Country_Name';

import { Control_Item_Trip_PreviousNext_Previous } from './Control_Item/Control_Item_Trip_PreviousNext_Previous';
import { Control_Item_Trip_PreviousNext_Next } from './Control_Item/Control_Item_Trip_PreviousNext_Next';

import { Control_Item_Trip_Name } from './Control_Item/Control_Item_Trip_Name';
import { Control_Item_Trip_Stage_Total } from './Control_Item/Control_Item_Trip_Stage_Total';
import { Control_Item_Trip_Nights_Total } from './Control_Item/Control_Item_Trip_Nights_Total';
import { Control_Item_Trip_Date_Price } from './Control_Item/Control_Item_Trip_Date_Price';
import { Control_Item_Country_Name } from './Control_Item/Control_Item_Country_Name';
import { Control_Item_Trip_Stage_Places } from './Control_Item/Control_Item_Trip_Stage_Places';
import { Control_Item_Trip_Description_Short } from './Control_Item/Control_Item_Trip_Description_Short';






export class Control_Menu_2_Modular extends Component {
    render() {
        const Panel = Collapse.Panel;
        const customPanelStyle = {

        };
        return (
      <div>

















  <div className="Control_2_1">



<div class="Control_Position_outer_wrapper">
    <div className="Control_Position_left Control_Position_inner_wrapper">
    <Control_Item_Trip_PreviousNext_Previous/>
    </div>

    <div className="Control_Position_center Control_Position_inner_wrapper">
    <Control_Item_Trip_Name/>
    <Control_Item_Place_Name/>
    <Control_Item_Hotel_Name/>
    </div>

    <div className="Control_Position_right Control_Position_inner_wrapper">
    <Control_Item_Trip_PreviousNext_Next/>
</div>
</div>



<div class="Control_Position_outer_wrapper">
    <div className="Control_Position_left Control_Position_inner_wrapper">
    <Control_Item_Trip_Stage_Total/>
    </div>

    <div className="Control_Position_center Control_Position_inner_wrapper inline-block">
    <Control_Item_Trip_Date_Price/>
    <Control_Item_Country_Name/>
    
              <Control_Item_Hotel_Place_Country_Name/>

              <Control_Item_Place_Features/>
          <Control_Item_Hotel_Features/>

    </div>

    <div className="Control_Position_right Control_Position_inner_wrapper">
    <Control_Item_Trip_Nights_Total/>
    </div>
</div>


<div class="Control_Position_outer_wrapper">
    <div className="Control_Position_left Control_Position_inner_wrapper">
    </div>

    <div className="Control_Position_center Control_Position_inner_wrapper inline-block">
    <Control_Item_Trip_Stage_Places/>
    <Control_Item_Trip_Description_Short/>
    </div>

    <div className="Control_Position_right Control_Position_inner_wrapper">
    </div>
</div>




  <Collapse className="Show" bordered={false} defaultActiveKey={['1']} >
            <Panel header={
            <div className="Control_Details_Panel_Expand">
            <i className="fas fa-caret-down Control_Icon_Expand"></i> 
            </div>
            } className="Control_Details_Panel AnimationRipple" showArrow={false} style={customPanelStyle}>
          
          <PerfectScrollbar className="Control_Details_Panel_Content">

          <img className="Voyager_Card_Image_Rounded" src="http://www.voyagercuba.co.uk/Images/Detail_Hotel.png" />
          
          </PerfectScrollbar>
    
            </Panel>
            </Collapse>

          <div className="flex-container">
         

          </div>
         
     
        </div>
      </div>
    );
  }
}
