import React, { Component } from "react";
export class Control_Item_Filter_Sort extends Component {
  render() {
    return (
            <div className="show">
            <a className="Control_Item_A" title="view filters & sort" onClick={() => this.props.changeView("filter_sort")}>
          <span>
              <i className="fas fa-filter Control_Icon_Layer_Sidebyside"></i>
              <i className="Hide fas fa-sort Control_Icon_Layer_Sidebyside"></i>
              <span className="Hide Control_Text_Size_1_Link_Count">99</span>
          </span>
          <span className="Hide Control_Text_Size_1_Link" >filter & Sort</span>
      </a>
  </div>



    );
  }
}
