import React, { Component } from "react";
export const Control_Item_Bookmark = (props) => {
 
    return (
            <div className="Show">
              <a className="Control_Item_A" onClick={() => props.saveItinerary(props.userId)}>
                <i className="fas fa-heart Control_Icon_Size_2" />
                <span className="Control_Text_Size_1_Link">save</span>
              </a>
            </div>
    );
  
}
