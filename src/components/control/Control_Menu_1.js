import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Control_Menu_1 extends Component {
  render() {
    return (
      <div>
        <div className="Control1">
          <div key="" className="flex-container">
            <div key="Control_Menu" className="Show" title="">
              <a className="Voyager_Control_Item_A">
                <i className="fas fa-bars Voyager_Control_Icon_Size_2" />
              </a>
            </div>
            <div key="Control_Profile" className="Show" title="">
              <a className="Voyager_Control_Item_A">
                <i className="fas fa-user Voyager_Control_Icon_Size_2" />
              </a>
            </div>

            <div key="Control_Profile" className="Show" title="">
              <a className="Voyager_Control_Item_A">
                <i className="fas fa-heart Voyager_Control_Icon_Size_2" />
              </a>
            </div>

            <div key="Control_Profile" className="Hide" title="">
              <a className="Voyager_Control_Item_A">
                <i className="fas fa-comment-alt Voyager_Control_Icon_Size_2" />
              </a>
            </div>

            <div key="Control_Filter" className="Hide" title="">
              <a className="Voyager_Control_Item_A">
                <i className="fas fa-bell Voyager_Control_Icon_Size_2" />
              </a>
            </div>
            <div key="Control_Sort" className="Show" title="">
              <a className="Voyager_Control_Item_A">
                <i className="fas fa-filter Voyager_Control_Icon_Size_2" />
              </a>
            </div>
            <div key="Control_Sort" className="Show" title="">
              <a className="Voyager_Control_Item_A">
                <i className="fas fa-sort Voyager_Control_Icon_Size_2" />
              </a>
            </div>
            <div key="Control_Sort" className="Show" title="">
              <a className="Voyager_Control_Item_A">
                <i className="fas fa-search Voyager_Control_Icon_Size_2" />
              </a>
            </div>
            <div key="Control_Detail_Level" className="Show" title="">
              <select
                onChange={this.props.changeDetailLevel.bind(this)}
                value={this.props.cardDetailLevel}
                className="Voyager_Control_Select_Detail_Level"
              >
                <option value="0">detail low</option>
                <option value="1">detail medium</option>
                <option value="2">detail high</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
