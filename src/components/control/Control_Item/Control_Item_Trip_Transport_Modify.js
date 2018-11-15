import React, { Component } from "react";
export class Control_Item_Trip_Transport_Modify extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("transport_modify")}>
                <i className="fas fa-home Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">transport</span>
              </a>
            </div>
    );
  }
}
