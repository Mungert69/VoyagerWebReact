import React from "react";

import { Control_Item_Countrys } from '../Control_Item/Control_Item_Countrys';
import { Control_Item_Trips } from '../Control_Item/Control_Item_Trips';
import { Control_Item_Places } from '../Control_Item/Control_Item_Places';
import { Control_Item_Hotels } from '../Control_Item/Control_Item_Hotels';
import { Control_Item_Info } from '../Control_Item/Control_Item_Info';
import { Control_Item_Profiles } from '../Control_Item/Control_Item_Profiles';


const MenuListView = (props) => {
    return(
    <div className="Control_3_1">
    <div className="flex-container">
    <Control_Item_Countrys/>
    <Control_Item_Trips changeView={ props.changeView}/>
    <Control_Item_Places changeView={ props.changeView}/>
    <Control_Item_Hotels changeView={ props.changeView}/>
    <Control_Item_Info/>
    <div className="hide"><Control_Item_Profiles/></div>
    </div>
    </div>);
};

export default MenuListView;