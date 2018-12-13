import React from "react";

export const  AccommodationCharacteristics = (props) => {
    
  let contents =
    props.accommodationCharacteristics === undefined ||
    props.accommodationCharacteristics === null ? null : (
      <span>{renderHtml(props)}</span>
    );

   function renderHtml (props) {
    return (
      <div className="Hotel_Characteristics_Panel">
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.smallHotel ? (
            <span>
              Small Hotel
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.mediumHotel ? (
            <span>
              medium Hotel
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">
          {props.accommodationCharacteristics.LargeHotel ? (
            <span>
              Large Hotel
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">
          {props.accommodationCharacteristics.modern ? (
            <span>
              modern<i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.heritage ? (
            <span>
              heritage
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.beachArea ? (
            <span>
              beach Area
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.beachFront ? (
            <span>
              beach Front
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.cityCentre ? (
            <span>
              city Centre
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.cityOutskirts ? (
            <span>
              city Outskirts
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.countryside ? (
            <span>
              countryside
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.eco ? (
            <span>
              eco<i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.bB ? (
            <span>
              bb<i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.rustic ? (
            <span>
              rustic<i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.cabana ? (
            <span>
              cabana<i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.business ? (
            <span>
              business
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.ownerManaged ? (
            <span>
              owner Managed
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.farmStay ? (
            <span>
              farm Stay
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.historicCentre ? (
            <span>
              historic Centre
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.casa ? (
            <span>
              casa<i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.townCentre ? (
            <span>
              townCentre
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.townOutskirts ? (
            <span>
              townOutskirts
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
        <span className="Hotel_Characteristics_Item_Title">

          {props.accommodationCharacteristics.coastal ? (
            <span>
              coastal
              <i className="fas fa-circle Voyager_Control_Icon_Divider" />
            </span>
          ) : null}
        </span>
      </div>
    );
  };

  return <span>{contents}</span>; //return
};


