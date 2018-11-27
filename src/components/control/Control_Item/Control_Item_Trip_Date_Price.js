import React, { Component } from "react";
export const Control_Item_Trip_Date_Price = (props) => {
  if (props.travelDate === undefined || props.travelDate === null) return <p>Date N/A</p>;
    return (
      <div>
      <span className="Trip_Date_Price">{props.travelDate} {props.priceStr}</span>
      </div>
    );
  
}
