import React, { Component } from "react";
export const Control_Item_Trip_Date_Price = ({datePriceObjs}) => {
  if (datePriceObjs === undefined || datePriceObjs === null) return <p>Date N/A</p>;
    return (
      <div>
      <span className="Trip_Date_Price">
      {
      datePriceObjs.map(datePriceObj => <span>{datePriceObj.dateStr} {datePriceObj.price}</span> 
      )
      }
      </span>
      </div>
    );
  
}
