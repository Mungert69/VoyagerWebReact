import React, { Component } from "react";
export const Control_Item_Trip_Nights_Total = (props) => {
  if (props.nights === undefined || props.nights === null) return <p>0</p>;
 
    return (
      <div className="show" >
      <a className="Control_Item_D">
      <i className="fas fa-moon Voyager_Control_Icon_Size_2">
            <l className="Control_Text_Right">{props.nights}</l></i>
      </a></div>
    );
  
}
