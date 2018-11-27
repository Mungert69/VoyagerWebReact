import React, { Component } from "react";
import MapView from '../containers/MapView';
import ImageView from '../containers/ImageView';
import { MenuVisualView }  from "../components/control/Menus/MenuVisualView";

export const VisualView = (props) => {
 
    return <span  >
      {props.showMap ? <MapView />
        : <ImageView />}
        <MenuVisualView />
    </span>
    ;
  
}
