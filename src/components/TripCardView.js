import React, { memo } from "react";
import "react-perfect-scrollbar/dist/css/styles.css";

import { Control_Item_Trip_Name } from "./control/Control_Item/Control_Item_Trip_Name";
import { Control_Item_Trip_Stage_Total } from "./control/Control_Item/Control_Item_Trip_Stage_Total";
import { Control_Item_Trip_Nights_Total } from "./control/Control_Item/Control_Item_Trip_Nights_Total";
import { Control_Item_Trip_Date_Price } from "./control/Control_Item/Control_Item_Trip_Date_Price";

import { Control_Item_Trip_Stage_Places } from "./control/Control_Item/Control_Item_Trip_Stage_Places";
import { Control_Item_Trip_Description_Short } from "./control/Control_Item/Control_Item_Trip_Description_Short";

export const TripCardView = React.memo(function TripCardView(props) {
  if (props.card === undefined || props.card === null) return null;
  return (
    <div className="Control_Trip_Card">
      <div class="Control_Position_outer_wrapper">
        <div className="Control_Position_left Control_Position_inner_wrapper" />

        <div className="Control_Position_center Control_Position_inner_wrapper">
          <Control_Item_Trip_Name tripName={props.card.title} />
        </div>

        <div className="Control_Position_right Control_Position_inner_wrapper" />
      </div>

      <div class="Control_Position_outer_wrapper">
        <div className="Control_Position_left Control_Position_inner_wrapper" />

        <div className="Control_Position_center Control_Position_inner_wrapper inline-block">
          <Control_Item_Trip_Date_Price
            datePriceObjs={props.card.datePriceObjs}
          />
        </div>

        <div className="Control_Position_right Control_Position_inner_wrapper" />
      </div>
      <div className="Trip_Stage_Nights_Country_Stages">
        <Control_Item_Trip_Nights_Total nights={props.card.nights} />
        CUBA
        <Control_Item_Trip_Stage_Total stages={props.card.stages} />
      </div>

      <div class="">
        <a
          onClick={() =>
                props.setTripCardEvent(props.card, props.userId)
          }
        >
          <Control_Item_Trip_Stage_Places placeObjs={props.card.placeObjs} />
        </a>
      </div>
    </div>
  );
});
