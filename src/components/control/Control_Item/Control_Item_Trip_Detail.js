import React, { Component } from "react";
import {Collapse } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
export class Control_Item_Trip_Detail extends Component {
  render() {
    const Panel = Collapse.Panel;
        const customPanelStyle = {

        };
    return (
      <div>
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

    );
  }
}
