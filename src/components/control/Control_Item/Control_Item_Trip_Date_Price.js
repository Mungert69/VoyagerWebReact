import React, { Component } from "react";
export const Control_Item_Trip_Date_Price = ({datePricesObjs}) => {
  if (datePricesObjs === undefined || datepricesObjs === null) return <p>Date N/A</p>;
    return (
      <div>
      {
      datePriceObjs.map(datePriceObj => <span> <span className="Trip_Date_Price"> {datePriceObj.date}</span>
      <span className="Trip_Date_Price"> {datePriceObj.price}</span></span>)
      }
    
      </div>
    );
  
}
