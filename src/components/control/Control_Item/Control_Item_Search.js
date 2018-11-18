import React, { Component } from "react";
export class Control_Item_Search extends Component {
  render() {
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => this.props.changeView("search")}>
                <i className="fas fa-search Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">search</span>
              </a>
            </div>
    );
  }
}
