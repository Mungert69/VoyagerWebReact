import React, { Component } from "react";
export class Control_Item_Filter_Sort extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("filter_sort")}>
                <i className="fas fa-filter Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">filter & Sort</span>
              </a>
            </div>
    );
  }
}
