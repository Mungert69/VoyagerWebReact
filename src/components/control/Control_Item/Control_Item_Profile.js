import React, { Component } from "react";
export class Control_Item_Profile extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("Profile")}>
                <i className="fas fa-user Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">Profile</span>
              </a>
            </div>
    );
  }
}
