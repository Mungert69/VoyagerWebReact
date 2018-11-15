import React, { Component } from "react";
export class Control_Item_Trip_Transport_Modify extends Component {
  render() {
    return (
      <div className="show">
      <a className="Control_Item_A" title="modify transport">
          <span>
              <i className="fas fa-car Control_Icon_Layer_Sidebyside"></i>
              <i className="fas fa-bus Control_Icon_Layer_Sidebyside"></i>
          </span>
          <span className="Control_Text_Size_1_Link" >transport</span>
      </a>
  </div>
    );
  }
}
