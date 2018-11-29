import React, { Component } from "react";
export const Control_Item_Trip_Description_Short = (props) => {
  if (props.descriptionShort === undefined || props.descriptionShort === null) return <p>0</p>;
 
    return (
      <div className="Trip_Description_Short_Panel">
   <l className="Trip_Description_Short">{props.descriptionShort}</l>
     </div>
    );
  
}

