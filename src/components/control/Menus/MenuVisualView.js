import React from "react";

const MenuVisualView = props => {
  return (
    <div className="Control_2_1">
      <div className="flex-container">        
        <div className="show">
          <a className="Voyager_Control_Item_B AnimationRipple">
            <i
              className="fas fa-map-marker Voyager_Control_Icon_Size_1"
              onClick={() => props.toggleShowMap(true)}
            />
          </a>
        </div>
        <div className="show">
          <a className="Voyager_Control_Item_B AnimationRipple">
            <i
              className="fas fa-images Voyager_Control_Icon_Size_1"
              onClick={() => props.toggleShowMap(false)}
            />
          </a>
        </div>    
      </div>
    </div>
  );
};

export default MenuVisualView;
