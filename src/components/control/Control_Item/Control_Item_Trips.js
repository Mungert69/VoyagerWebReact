import React, { Component } from "react";
export class Control_Item_Trips extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("trip")}>
                <i className="fas fa-map-marked Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">Trips</span>
              </a>
            </div>
    );
  }
}
