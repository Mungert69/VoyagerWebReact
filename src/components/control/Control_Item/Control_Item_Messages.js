import React, { Component } from "react";
export class Control_Item_Messages extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("messages")}>
                <i className="fas fa-comment-alt Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">messages</span>
              </a>
            </div>
    );
  }
}
