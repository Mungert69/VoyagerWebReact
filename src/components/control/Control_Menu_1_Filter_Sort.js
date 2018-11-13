import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Control_Menu_1_Filter_Sort extends Component {
  render() {
    return (
      <div>
        <div className="Control1">
          <div key="" className="flex-container">



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
           
           
            <div key="Control_Profile" className="Hide" title="">
              <a className="Voyager_Control_Item_A">
                <i className="fas fa-check Voyager_Control_Icon_Size_2" />
              </a>
            </div>

            <div key="Control_Filter" className="Hide" title="">
              <a className="Voyager_Control_Item_A">
                <i className="fas fa-times Voyager_Control_Icon_Size_2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
