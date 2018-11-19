import React, { Component } from "react";
export class Control_Item_Hotels extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("hotel")}>
                <i className="fas fa-home Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">Hotels</span>
              </a>
            </div>
    );
  }
}
