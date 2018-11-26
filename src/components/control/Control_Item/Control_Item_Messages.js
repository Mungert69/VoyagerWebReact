import React, { Component } from "react";
export class Control_Item_Messages extends Component {
  render() {
    return (

  <div className="show">
      <a className="Control_Item_A" title="view messages" onClick={() => this.props.changeView("messages")}>
          <span>
              <i className="fas fa-comment-alt Control_Icon_Layer_Sidebyside"></i>
              <span className="Hide Control_Text_Size_1_Link_Count">99</span>
          </span>
          <span className="Hide Control_Text_Size_1_Link" >messages</span>
      </a>
  </div>

    );
  }
}
