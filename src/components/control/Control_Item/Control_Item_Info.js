import React, { Component } from "react";
export class Control_Item_Info extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("Info")}>
                <i className="fas fa-book-open Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">Info</span>
              </a>
            </div>
    );
  }
}
