import React, { Component } from "react";
export class Control_Item_Trip_Hotel_Modify extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("hotel_modify")}>
                <i className="fas fa-home Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">hotel</span>
              </a>
            </div>
    );
  }
}
