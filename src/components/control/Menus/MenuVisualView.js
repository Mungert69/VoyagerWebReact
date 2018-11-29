import React from "react";

const MenuVisualView = props => {
  return (
    <div className="Control_2_3">
      <div>
        {props.showMap ? (
          <a className="Voyager_Control_Item_B AnimationRipple">
            <i
              className="fas fa-image Voyager_Control_Icon_Map_Image"
              onClick={() => props.toggleShowMap()}
            />
          </a>
        ) : (
          <a className="Voyager_Control_Item_B AnimationRipple">
            <i
              className="fas fa-map Voyager_Control_Icon_Map_Image"
              onClick={() => props.toggleShowMap()}
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default MenuVisualView;
