import React from "react";
import { Collapse } from 'antd';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { Control_Item_Trip_PreviousNext_Previous } from '../Control_Item/Control_Item_Trip_PreviousNext_Previous';
import { Control_Item_Trip_PreviousNext_Next } from '../Control_Item/Control_Item_Trip_PreviousNext_Next';

import { Control_Item_Trip_Name } from '../Control_Item/Control_Item_Trip_Name';
import { Control_Item_Trip_Stage_Total } from '../Control_Item/Control_Item_Trip_Stage_Total';
import { Control_Item_Trip_Nights_Total } from '../Control_Item/Control_Item_Trip_Nights_Total';
import { Control_Item_Trip_Date_Price } from '../Control_Item/Control_Item_Trip_Date_Price';
import { Control_Item_Country_Name } from '../Control_Item/Control_Item_Country_Name';
import { Control_Item_Trip_Stage_Places } from '../Control_Item/Control_Item_Trip_Stage_Places';
import { Control_Item_Trip_Description_Short } from '../Control_Item/Control_Item_Trip_Description_Short';
import { Control_Item_Hotel_Place_Country_Name } from '../Control_Item/Control_Item_Hotel_Place_Country_Name';




const MenuTripListView = (props) => {
    if (props.card === undefined || props.card === null) return null;
    return (
        <div>

            <div className="Control_2_1">

                <div class="Control_Position_outer_wrapper">
                    <div className="Control_Position_left Control_Position_inner_wrapper">
                        <Control_Item_Trip_PreviousNext_Previous />
                    </div>

                    <div className="Control_Position_center Control_Position_inner_wrapper">
                        <Control_Item_Trip_Name tripName={props.card.title} />
                       
                    </div>

                    <div className="Control_Position_right Control_Position_inner_wrapper">
                        <Control_Item_Trip_PreviousNext_Next />
                    </div>
                </div>



                <div class="Control_Position_outer_wrapper">
                    <div className="Control_Position_left Control_Position_inner_wrapper">
                        <Control_Item_Trip_Stage_Total />
                    </div>

                    <div className="Control_Position_center Control_Position_inner_wrapper inline-block">
                        <Control_Item_Trip_Date_Price  priceStr={props.card.pricesStr} />
                        <Control_Item_Country_Name country={props.card.country}/>
                        <Control_Item_Hotel_Place_Country_Name />                     
                    </div>

                    <div className="Control_Position_right Control_Position_inner_wrapper">
                        <Control_Item_Trip_Nights_Total nights={props.card.nights} />
                    </div>
                </div>


                <div class="Control_Position_outer_wrapper">
                    <div className="Control_Position_left Control_Position_inner_wrapper">
                    </div>

                    <div className="Control_Position_center Control_Position_inner_wrapper inline-block">
                        <Control_Item_Trip_Stage_Places />
                        <Control_Item_Trip_Description_Short />
                    </div>

                    <div className="Control_Position_right Control_Position_inner_wrapper">
                    </div>
                </div>

               
               


            </div>
        </div>
    );
};

export default MenuTripListView;