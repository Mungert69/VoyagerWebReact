import React, { Component } from "react";
export const Control_Item_Trip_Stage_Total =  ({stages}) => {
  
    return (
      <div className="show" >
      <a className="Control_Item_D">
      <l className="Control_Text_Left">{stages}</l>
      <i className="fas fa-map-marker Voyager_Control_Icon_Size_2"></i>
      </a></div>
    );
  
}
