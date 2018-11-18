import React, { Component } from "react";
export class Control_Item_Filter_Sort extends Component {
  render() {
    return (
            <div className="show">
            <a className="Control_Item_A" onClick={() => this.props.changeView("filter_sort")}>
          <span>
              <i className="fas fa-filter Control_Icon_Layer_Sidebyside"></i>
              <i className="fas fa-sort Control_Icon_Layer_Sidebyside"></i>
          </span>
          <span className="Control_Text_Size_1_Link" >filter & Sort</span>
      </a>
  </div>
    );
  }
}
