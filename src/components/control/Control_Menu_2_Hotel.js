import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Collapse } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
export class Control_Menu_2_Hotel extends Component {

    render() {
        const Panel = Collapse.Panel;
        const customPanelStyle = {

        };
        return (
            <div>
             <div className="Control_2_1">                 
   
   <div class="Control_Position_outer_wrapper">
  
  <div className="Control_Position_left Control_Position_inner_wrapper">
   
    <div className="Show" >
         <a className="Control_Item_C" >
         <i className="fas fa-share-alt Voyager_Control_Icon_Size_1"></i>
         </a> </div>
       
         <div className="Show" >
         <a className="Control_Item_C">
         <i className="fas fa-heart Voyager_Control_Icon_Size_1"></i>
         </a></div>
  </div>




  <div className="Control_Position_center Control_Position_inner_wrapper">
  <div  className="hide" >
         <a className="Control_Item_D">
         <i className="fas fa-thumbs-down Voyager_Control_Icon_Size_1"> </i>
         </a></div>
         <div className="show" >
         <a className="Control_Item_D">
         <l className="Control_Text_Left">places</l>
         <i className="fas fa-map-marker Voyager_Control_Icon_Size_1"></i>
         </a></div>

         <div className="show" >
         <a className="Control_Item_D">
         <i className="fas fa-image Voyager_Control_Icon_Size_1"></i>
         </a></div>

         <div className="hide" >
         <a className="Control_Item_D">
         <i className="fas fa-map Voyager_Control_Icon_Size_1"></i>
         </a></div> 

         <div className="show" >
         <a className="Control_Item_D">
         <i className="fas fa-home Voyager_Control_Icon_Size_1">
         <l className="Control_Text_Right">hotels</l></i>
         </a></div>

         <div className="hide" >
         <a className="Control_Item_D">
         <i className="fas fa-thumbs-up Voyager_Control_Icon_Size_1"> </i>
         </a></div>
  </div>
  




  <div className="Control_Position_right Control_Position_inner_wrapper">

    <div  className="show" >
         <a className="Control_Item_C">
         <i className="fas fa-street-view Voyager_Control_Icon_Size_1"></i>
         </a></div>

         <div  className="show" >
         <a className="Control_Item_C">
         <i className="fas fa-expand-arrows-alt Voyager_Control_Icon_Size_1"></i>
         </a></div> 
  </div>
</div>
        </div>

            <div className="Control_2_2">     

            <span className="Hotel_Name">Hotel Name</span>
            <span className="Country_Name">country</span>
            <span className="Feature" >hotel feature - hotel feature - hotel feature</span>
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
                   
            </div>
</div>  
          
        );
    }
}