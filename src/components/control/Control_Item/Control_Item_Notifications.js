import React, { Component } from "react";
export class Control_Item_Notifications extends Component {
  render() {
    return (

<div className="show">
      <a className="Control_Item_A" title="view Notifications" onClick={() => this.props.changeView("notifications")}>
          <span>
              <i className="fas fa-bell Control_Icon_Layer_Sidebyside"></i>
              <span className="Hide Control_Text_Size_1_Link_Count">99</span>
          </span>
          <span className="Hide Control_Text_Size_1_Link" >Notifications</span>
      </a>
  </div>

    );
  }
}
