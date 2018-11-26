import React, { Component } from "react";
import MapView from '../containers/MapView';
import { Control_Menu_2 } from "./control/Control_Menu_2";

export class VisualView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <span  >

        <MapView />
        <Control_Menu_2 />
    </span>
    ;
  }
}
