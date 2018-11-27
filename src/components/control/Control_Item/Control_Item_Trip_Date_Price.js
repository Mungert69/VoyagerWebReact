import React, { Component } from "react";
export const Control_Item_Trip_Date_Price = (props) => {
  if (props.priceStr === undefined || props.priceStr === null) return <p>Date N/A</p>;
    return (
      <div>
      <span className="Trip_Date_Price"> {props.priceStr}</span>
      </div>
    );
  
}
