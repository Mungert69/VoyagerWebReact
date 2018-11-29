import React, { Component } from "react";
export const Control_Item_Trip_Stage_Places = (props) => {
  if (props.placeObjs===undefined || props.placeObjs===null) return null;
    return (
      <div className="Trip_Stages">


       { 
         props.placeObjs.map((placeObj,index) => <span>  <div className="Trip_Stage AnimationRipple">
        
      <a><i className="show fas fa-circle Trip_Stage_Icon"><l className="Trip_Stage_Icon_Number">{index+1}</l><span className="Trip_Stage_PlaceName" >{placeObj.placeName}</span></i></a>
      </div></span>)
      }                
      <span className="Trip_Stage AnimationRipple">
     <l className="Trip_Stage_Icon_Number"></l><span className="Trip_Stage_PlaceName" >trip details</span></span>
      </div>
      
    );
  }

