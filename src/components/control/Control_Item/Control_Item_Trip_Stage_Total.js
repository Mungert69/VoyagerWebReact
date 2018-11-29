import React, { Component } from "react";
export const Control_Item_Trip_Stage_Total =  ({stages}) => {
  
    return (
      <div className="Control_Item_Trip_Stages_Total_Panel" >
      <a className="">
        <i className="fas fa-map-marker Control_Item_Trip_Stages_Total_Icon"></i>
      <l className="Control_Item_Trip_Stages_Total_Text">{stages}</l>
    
      </a></div>
    );
  
}
