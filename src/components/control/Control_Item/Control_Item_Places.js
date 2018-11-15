import React, { Component } from "react";
export class Control_Item_Places extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("Places")}>
                <i className="fas fa-map-marker Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">Places</span>
              </a>
            </div>
    );
  }
}
