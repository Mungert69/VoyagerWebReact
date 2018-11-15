import React, { Component } from "react";
export class Control_Item_Close extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("close")}>
                <i className="fas fa-times Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">close</span>
              </a>
            </div>
    );
  }
}
