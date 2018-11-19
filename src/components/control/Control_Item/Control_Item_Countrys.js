import React, { Component } from "react";
export class Control_Item_Countrys extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("country")}>
              <span className="Show Control_Text_Size_1_Link">2</span>
                <i className="fas fa-globe-americas Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">country</span>
              </a>
            </div>
    );
  }
}
