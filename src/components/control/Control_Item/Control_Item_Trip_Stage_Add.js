import React, { Component } from "react";
export class Control_Item_Trip_Stage_Add extends Component {
  render() {
    return (
            <div className="Show" title="add stage">
              <a className="Control_Item_A" onClick={() => this.props.changeViewPlaceWithFilterByNextHop()}>
                <i className="fas fa-map-marker-plus Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">add</span>
              </a>
            </div>
    );
  }
}
