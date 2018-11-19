import React, { Component } from "react";
export class Control_Item_Message_Send extends Component {
  render() {
    return (
            <div className="Show" title="remove stage">
              <a className="Control_Item_A" onClick={() => this.props.changeView("stage_remove")}>
                <i className="fas fa-caret-right Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">send</span>
              </a>
            </div>
    );
  }
}
