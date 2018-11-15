import React, { Component } from "react";
export class Control_Item_Bookmark extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("save")}>
                <i className="fas fa-heart Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">save</span>
              </a>
            </div>
    );
  }
}
