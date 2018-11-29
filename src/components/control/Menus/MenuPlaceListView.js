import React from "react";
import { Collapse } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { CardView } from '../../CardView';


const MenuPlaceListView = (props) => {
    const Panel = Collapse.Panel;
    const customPanelStyle = {};
    if (props.card == undefined) return null;

    return (

        <div>
            <div className="Control_2_1">

                <div class="Control_Position_outer_wrapper">

                    <div className="Control_Position_left Control_Position_inner_wrapper">

                             <div className="show" >
                            <a className="Control_Item_D">
                                <l className="Control_Text_Places">places</l>
                                <i className="hide fas fa-map-marker Voyager_Control_Icon_Size_1"></i>
                            </a></div>
                    </div>




                    <div className="Control_Position_center Control_Position_inner_wrapper">
                        
                                 <div className="Show" >
                            <a className="Control_Item_C" >
                                <i className="fas fa-share-alt Voyager_Control_Icon_Size_2"></i>
                            </a> </div>

                        <div className="Show" >
                            <a className="Control_Item_C">
                                <i className="fas fa-heart Voyager_Control_Icon_Size_2"></i>
                            </a></div>  
                         
                    </div>



                    <div className="Control_Position_right Control_Position_inner_wrapper">
   
                         <div className="show" >
                            <a className="Control_Item_D" onClick={() => props.changeViewHotelWithFilterByPlace(props.card.title)}>
                            <l className="Control_Text_Hotels">hotels</l>
                            </a></div>

                        <div className="hide" >
                            <a className="Control_Item_C">
                                <i className="fas fa-street-view Voyager_Control_Icon_Size_1"></i>
                            </a></div>

                        <div className="hide" >
                            <a className="Control_Item_C">
                                <i className="fas fa-expand-arrows-alt Voyager_Control_Icon_Size_1"></i>
                            </a></div>
                    </div>
                </div>
            </div>

            <div className="Control_2_2">

                <span className="Place_Name">{props.card.title}</span>
                <span className="Country_Name">{props.card.country}</span>

                <span className="Place_Feature" >place feature - place feature - place feature</span>
                <Collapse className="Show" bordered={false} defaultActiveKey={['1']} >
                    <Panel header={
                        <div className="Voyager_Card_Container_Trip_Details_SubPanel1">
                            <i className="fas fa-caret-down Control_Icon_Expand"></i>
                        </div>
                    } className="Control_Details_Panel AnimationRipple" showArrow={false} style={customPanelStyle}>

                        <PerfectScrollbar className="Control_Details_Panel_Content_Full">
                            <CardView styleCard={props.styleCard} card={props.card} />
                        </PerfectScrollbar>

                    </Panel>
                </Collapse>

            </div>
        </div>

    );

};

export default MenuPlaceListView;