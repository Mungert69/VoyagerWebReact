import React, { Component } from "react";
export const Control_Item_Trip_Date_Price = (props) => {
  if (props.pricesStr === undefined || props.pricesStr === null) return <p>Date N/A</p>;
    return (
      <div>
      <span className="Trip_Date_Price"> {props.pricesStr}</span>
      </div>
    );
  
}
