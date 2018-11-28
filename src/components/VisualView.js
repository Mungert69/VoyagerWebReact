import React, { Component } from "react";
import MapView from '../containers/MapView';
import ImageView from '../containers/ImageView';
import { ImageCarousel } from './control/ImageCarousel';
import  MenuVisualView   from '../containers/Menus/MenuVisualView';

export const VisualView = (props) => {
 
    return <span  >
      {props.showMap ? <MapView />
        : <ImageView />}
     
     <MenuVisualView/>>
    </span>
    ;
  
}
