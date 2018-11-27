import React, { Component } from "react";
export const Control_Item_Trip_Name = (props) => {
    if (props.tripName===undefined || props.tripName===null) return <p>Trip Name N/A</p>
    return (
      <span className="Trip_Name">{props.tripName}</span>
    );
  
}
