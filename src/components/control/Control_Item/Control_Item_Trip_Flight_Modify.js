import React, { Component } from "react";
export class Control_Item_Trip_Flight extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("flight")}>
                <i className="fas fa-plane Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">update flights after nights change</span>
              </a>
            </div>
    );
  }
}
