import React, { Component } from "react";

import { Control_Item_Trip_Hotel_Modify } from './Control_Item/Control_Item_Trip_Hotel_Modify';
import { Control_Item_Trip_Nights_Modify } from './Control_Item/Control_Item_Trip_Nights_Modify';
import { Control_Item_Trip_Transport_Modify } from './Control_Item/Control_Item_Trip_Transport_Modify';

import { Control_Item_Trip_Stage_Add } from './Control_Item/Control_Item_Trip_Stage_Add';
import { Control_Item_Trip_Stage_Remove } from './Control_Item/Control_Item_Trip_Stage_Remove';
import { Control_Item_Trip_Update } from './Control_Item/Control_Item_Trip_Update';


import { Control_Item_Countrys } from './Control_Item/Control_Item_Countrys';
import { Control_Item_Trips } from './Control_Item/Control_Item_Trips';
import { Control_Item_Places } from './Control_Item/Control_Item_Places';
import { Control_Item_Hotels } from './Control_Item/Control_Item_Hotels';
import { Control_Item_Info } from './Control_Item/Control_Item_Info';
import { Control_Item_Profiles } from './Control_Item/Control_Item_Profiles';


import { Control_Item_Trips_All } from './Control_Item/Control_Item_Trips_All';
import { Control_Item_Share } from './Control_Item/Control_Item_Share';
import { Control_Item_Bookmark } from './Control_Item/Control_Item_Bookmark';
import { Control_Item_Trip_Date } from './Control_Item/Control_Item_Trip_Date';
import { Control_Item_Trip_Flight } from './Control_Item/Control_Item_Trip_Flight';
import { Control_Item_Message } from './Control_Item/Control_Item_Message';


import { Control_Item_Update } from './Control_Item/Control_Item_Update';
import { Control_Item_Close } from './Control_Item/Control_Item_Close';


import { Control_Item_Trip_Stage_Control } from './Control_Item/Control_Item_Trip_Stage_Control';

export class Control_Menu_3_Modular extends Component {
  render() {
    return (
      <div>
        <div className="Control_3_1">
        <div className="flex-container">
          
          <Control_Item_Trip_Hotel_Modify/>
          <Control_Item_Trip_Nights_Modify/>
          <Control_Item_Trip_Transport_Modify/>

          <Control_Item_Trip_Stage_Add/>
          <Control_Item_Trip_Stage_Remove/>
          <Control_Item_Trip_Update/>
          </div>

          <div className="flex-container">
          
          <Control_Item_Countrys/>
          <Control_Item_Trips changeView={ this.props.changeView}/>
          <Control_Item_Places changeView={ this.props.changeView}/>
          <Control_Item_Hotels changeView={ this.props.changeView}/>
          <Control_Item_Info/>
          <Control_Item_Profiles/>

          <Control_Item_Trips_All/>
          <Control_Item_Share/>
          <Control_Item_Bookmark/>
          <Control_Item_Trip_Date/>
          <Control_Item_Trip_Flight/>
          <Control_Item_Message/>

          <Control_Item_Update/>
          <Control_Item_Close/>

          <Control_Item_Trip_Stage_Control/>

          </div>
         
     
        </div>
      </div>
    );
  }
}
