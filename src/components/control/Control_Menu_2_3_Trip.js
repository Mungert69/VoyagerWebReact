import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Collapse } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
export class Control_Menu_2_3_Trip extends Component {

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


         <div className="show" >
         <a className="Control_Item_D">
         <i className="fas fa-image Voyager_Control_Icon_Size_1"></i>
         </a></div>

         <div className="hide" >
         <a className="Control_Item_D">
         <i className="fas fa-map Voyager_Control_Icon_Size_1"></i>
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

            <span className="Place_Name">placename</span>
            <span className="Country_Name">country</span>
            <span className="Feature" >place feature - place feature - place feature</span>
                   
            </div>
</div>  
          
        );
    }
}