import React, { Component } from "react";
export class Control_Item_Trip_Date extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("date")}>
                <i className="fas fa-calendar-alt Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">date</span>
              </a>
            </div>
    );
  }
}
