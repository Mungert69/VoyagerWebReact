import React, { Component } from "react";
export const Control_Item_Trip_Date_Price = (props) => {
  if (props.pricesObjs === undefined || props.pricesObjs === null) return <p>Date N/A</p>;
    return (
      <div>
      {
      props.priceObjs.map(priceObj => <span> <span className="Trip_Date_Price"> {priceObj.date}</span>
      <span className="Trip_Date_Price"> {priceObj.price}</span></span>)
      }
    
      </div>
    );
  
}
