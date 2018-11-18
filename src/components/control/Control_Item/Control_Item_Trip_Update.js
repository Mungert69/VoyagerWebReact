import React, { Component } from "react";
export class Control_Item_Trip_Update extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("trip_update")}>
                <i className="fas fa-check Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">update</span>
              </a>
            </div>
    );
  }
}
