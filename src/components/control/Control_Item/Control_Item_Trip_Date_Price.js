import React, { Component } from "react";
export const Control_Item_Trip_Date_Price = (date,price) => {
  
    return (
      <div>
      <span className="Trip_Date_Price">{date} £{price}</span>
      </div>
    );
  
}
