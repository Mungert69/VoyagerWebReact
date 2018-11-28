import React, { Component } from "react";
export const Control_Item_Country_Name = (props) => {
  if (props.country === undefined || props.country === null) return <p>Country N/A</p>;
    return (

      <span className="Country_Name">Country={props.country}</span>

    );
  
}
