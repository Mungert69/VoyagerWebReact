import React, { Component } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';



export const Control_Item_Trip_Date_Price = ({ datePriceObjs }) => {
  if (datePriceObjs === undefined || datePriceObjs === null)
    return <p>Date N/A</p>;
  return (
    <div >      
      <span className="Trip_Date_Price_Group">
        {datePriceObjs.map(datePriceObj => (
          <span className="Trip_Date_Price_Item" >
            {datePriceObj.dateStr} £{datePriceObj.price}
      
           
                     </span>

        ))}
      </span>  
    </div>
  );
};

