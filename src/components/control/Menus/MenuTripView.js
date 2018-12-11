import React from "react";


import { Control_Item_Trip_Hotel_Modify } from '../Control_Item/Control_Item_Trip_Hotel_Modify';
import { Control_Item_Trip_Nights_Modify } from '../Control_Item/Control_Item_Trip_Nights_Modify';
import { Control_Item_Trip_Transport_Modify } from '../Control_Item/Control_Item_Trip_Transport_Modify';

import { Control_Item_Trip_Stage_Add } from '../Control_Item/Control_Item_Trip_Stage_Add';
import { Control_Item_Trip_Stage_Remove } from '../Control_Item/Control_Item_Trip_Stage_Remove';
import { Control_Item_Trip_Update } from '../Control_Item/Control_Item_Trip_Update';

import { Control_Item_Trips_All } from '../Control_Item/Control_Item_Trips_All';
import { Control_Item_Share } from '..//Control_Item/Control_Item_Share';
import { Control_Item_Bookmark } from '../Control_Item/Control_Item_Bookmark';
import { Control_Item_Trip_Date } from '../Control_Item/Control_Item_Trip_Date';
import { Control_Item_Trip_Flight } from '../Control_Item/Control_Item_Trip_Flight';
import { Control_Item_Message } from '../Control_Item/Control_Item_Message';


import { Control_Item_Update } from '../Control_Item/Control_Item_Update';
import { Control_Item_Close } from '../Control_Item/Control_Item_Close';

import { Control_Item_Message_Cancel } from '../Control_Item/Control_Item_Message_Cancel';
import { Control_Item_Message_Attach } from '../Control_Item/Control_Item_Message_Attach';
import { Control_Item_Message_Send } from '../Control_Item/Control_Item_Message_Send';
import { Control_Item_Message_Call } from '../Control_Item/Control_Item_Message_Call';
import { Control_Item_Message_Attach_Finish } from '../Control_Item/Control_Item_Message_Attach_Finish';

import { Control_Item_Notification_ClearAll } from '../Control_Item/Control_Item_Notification_ClearAll';


const MenuTripView = (props) => {
  return(
    <div>
    <div className="Control_3_1">
    <div className="flex-container">
      
      <Control_Item_Trip_Hotel_Modify/>
      <Control_Item_Trip_Nights_Modify/>
      <Control_Item_Trip_Transport_Modify/>

      <Control_Item_Trip_Stage_Add changeViewPlaceWithFilterByNextHop={props.changeViewPlaceWithFilterByNextHop}/>
          <Control_Item_Trip_Stage_Remove userId={props.userId} deleteHotel={props.deleteHotel}/>
      <Control_Item_Trip_Update/>

      <Control_Item_Message_Cancel/>
      <Control_Item_Message_Attach/>
      <Control_Item_Message_Send/>
      <Control_Item_Message_Call/>
      <Control_Item_Message_Attach_Finish/>

      <Control_Item_Notification_ClearAll/>
      </div>


      <div className="flex-container">
      
     

      <Control_Item_Trips_All changeView={props.changeView}/>
      <Control_Item_Share/>
      <Control_Item_Bookmark userId={props.userId} saveItinerary={props.saveItinerary}/>
      <Control_Item_Trip_Date/>
      <Control_Item_Trip_Flight/>
      <Control_Item_Message/>

      <Control_Item_Update/>
      <Control_Item_Close/>

      </div>
     
 
    </div>
  </div>);
};

export default MenuTripView;