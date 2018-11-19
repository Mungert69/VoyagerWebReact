import React, { Component } from "react";
export class Control_Item_Menu extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("menu")}>
                <i className="fas fa-bars Control_Icon_Size_2" />
                <span className="Hide Control_Text_Size_1_Link">menu</span>
              </a>
            </div>
    );
  }
}
