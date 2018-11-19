import React, { Component } from "react";
export class Control_Item_Bookmarks extends Component {
  render() {
    return (

      <div className="show">
      <a className="Control_Item_A" title="modify transport" onClick={() => this.props.changeView("save")}>
          <span>
              <i className="fas fa-heart Control_Icon_Layer_Sidebyside"></i>
              <span className="Show Control_Text_Size_1_Link_Count">99</span>
          </span>
          <span className="Hide Control_Text_Size_1_Link" >bookmarked</span>
      </a>
  </div>

    );
  }
}
