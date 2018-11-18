import React, { Component } from "react";
export class Control_Item_Share extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("share")}>
                <i className="fas fa-share-alt Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">share</span>
              </a>
            </div>
    );
  }
}
