import React, { Component } from "react";

import { Control_Item_Menu } from './Control_Item/Control_Item_Menu';
import { Control_Item_Profile } from './Control_Item/Control_Item_Profile';
import { Control_Item_Bookmarks } from './Control_Item/Control_Item_Bookmarks';
import { Control_Item_Messages } from './Control_Item/Control_Item_Messages';
import { Control_Item_Notifications } from './Control_Item/Control_Item_Notifications';

import { Control_Item_Filter_Sort } from './Control_Item/Control_Item_Filter_Sort';
import { Control_Item_Search } from './Control_Item/Control_Item_Search';

import { Control_Item_Detail_Level } from './Control_Item/Control_Item_Detail_Level';

export class Control_Menu_1_Modular extends Component {
  render() {
    return (
      <div>
      <div className="Control_1">
      <div className="flex-container">
        
        <Control_Item_Menu/>
        <Control_Item_Profile/>
        <Control_Item_Bookmarks/>
        <Control_Item_Messages/>
        <Control_Item_Notifications/>

        <Control_Item_Filter_Sort/>
        <Control_Item_Search/>

        <Control_Item_Detail_Level/>

          </div>
        </div>
      </div>
    );
  }
}
