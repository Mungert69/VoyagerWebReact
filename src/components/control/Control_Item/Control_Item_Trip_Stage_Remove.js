import React, { Component } from "react";
export class Control_Item_Trip_Stage_Remove extends Component {
  render() {
    return (
            <div className="Show" title="remove stage">
              <a className="Control_Item_A" onClick={() => this.props.changeView("stage_remove")}>
                <i className="fas fa-map-marker-minus Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">remove</span>
              </a>
            </div>
    );
  }
}
