import React, { Component } from "react";
export class Control_Item_Message extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("message")}>
                <i className="fas fa-comment-alt Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">message</span>
              </a>
            </div>
    );
  }
}
