import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Collapse } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
export class Control_2_1_Trip extends Component {

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
         <i className="fas fa-image Voyager_Control_Icon_Size_1"></i>
         </a></div>

         <div className="hide" >
         <a className="Control_Item_D">
         <i className="fas fa-map Voyager_Control_Icon_Size_1"></i>
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



                    <div class="Control_Position_outer_wrapper">
                        <div className="Control_Position_left Control_Position_inner_wrapper">

                        </div>

                        <div className="Control_Position_center Control_Position_inner_wrapper">
                            <span className="Place_Name">TRIP NAME TRIP NAME TRIP NAME TRIP</span>
                        </div>

                        <div className="Control_Position_right Control_Position_inner_wrapper">
    
                        </div>
                    </div>



                    <div class="Control_Position_outer_wrapper">
                        <div className="Control_Position_left Control_Position_inner_wrapper">

        <div className="show" >
         <a className="Control_Item_D">
         <l className="Control_Text_Left">7</l>
         <i className="fas fa-map-marker Voyager_Control_Icon_Size_2"></i>
         </a></div>
                        </div>

                        <div className="Control_Position_center Control_Position_inner_wrapper inline-block">
                            <span className="Trip_Date_Price">AUGUST 2019 £1242</span>
                            <span className="Country_Name">country</span>

                        </div>

                        <div className="Control_Position_right Control_Position_inner_wrapper">
                        <div className="show" >
         <a className="Control_Item_D">
         <i className="fas fa-moon Voyager_Control_Icon_Size_2">
         <l className="Control_Text_Right">14</l></i>
         </a></div>
                        </div>
                    </div>






                        <div className="Trip_Stages">
                        
                        <div className="Trip_Stage">
                        <a><i className="show fas fa-circle Trip_Stage_Icon"><l className="Trip_Stage_Icon_Number">1</l><span className="Trip_Stage_PlaceName" >placename</span></i></a>
                        </div>
                        <div className="Trip_Stage">
                        <a><i className="show fas fa-circle Trip_Stage_Icon"><l className="Trip_Stage_Icon_Number">2</l><span className="Trip_Stage_PlaceName" >placename</span></i></a>
                        </div>
                       <div className="Trip_Stage">
                        <a><i className="show fas fa-circle Trip_Stage_Icon"><l className="Trip_Stage_Icon_Number">3</l><span className="Trip_Stage_PlaceName" >placename</span></i></a>
                        </div>   
                        <div className="Trip_Stage">
                        <a><i className="show fas fa-circle Trip_Stage_Icon"><l className="Trip_Stage_Icon_Number">4</l><span className="Trip_Stage_PlaceName" >placename</span></i></a>
                        </div>
                        <div className="Trip_Stage">
                        <a><i className="show fas fa-circle Trip_Stage_Icon"><l className="Trip_Stage_Icon_Number">5</l><span className="Trip_Stage_PlaceName" >placename</span></i></a>
                        </div>
                       <div className="Trip_Stage">
                        <a><i className="show fas fa-circle Trip_Stage_Icon"><l className="Trip_Stage_Icon_Number">6</l><span className="Trip_Stage_PlaceName" >placename</span></i></a>
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
                   
            </div>



             

</div>  
          
        );
    }
}