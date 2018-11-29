import React, { Component } from "react";
export const Control_Item_Trip_Nights_Total = (props) => {
  if (props.nights === undefined || props.nights === null) return <p>0</p>;
 
    return (
      <div className="Control_Item_Trip_Nights_Total_Panel" >
      <a className="">
      <i className="fas fa-moon Control_Item_Trip_Nights_Total_Icon"></i>
            <l className="Control_Item_Trip_Stages_Total_Text">{props.nights}</l>
      </a></div>
    );
  
}
