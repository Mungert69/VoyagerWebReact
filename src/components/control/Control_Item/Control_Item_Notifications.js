import React, { Component } from "react";
export class Control_Item_Notifications extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("notifications")}>
                <i className="fas fa-bell Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">Notifications</span>
              </a>
            </div>
    );
  }
}
