import React from "react";

const MenuVisualView = props => {
  return (
    <div className="Control2">
      <div className="flex-container">
        <div className="Show">
          <a className="Voyager_Control_Item_B AnimationRipple">
            <i className="fas fa-heart Voyager_Control_Icon_Size_1" />
          </a>
        </div>
        <div className="show">
          <a className="Voyager_Control_Item_B AnimationRipple">
            <i className="fas fa-share-alt Voyager_Control_Icon_Size_1" />
          </a>
        </div>
        <div className="show">
          <a className="Voyager_Control_Item_B AnimationRipple">
            <i
              className="fas fa-map-marker Voyager_Control_Icon_Size_1"
              onClick={() => props.toggleShowMap(true)}
            />
          </a>
        </div>{" "}
        <div className="show">
          <a className="Voyager_Control_Item_B AnimationRipple">
            <i
              className="fas fa-images Voyager_Control_Icon_Size_1"
              onClick={() => props.toggleShowMap(false)}
            />
          </a>
        </div>{" "}
        <div className="show">
          <a className="Voyager_Control_Item_B AnimationRipple">
            <i className="fas fa-home Voyager_Control_Icon_Size_1" />
          </a>
        </div>{" "}
        <div className="show">
          <a className="Voyager_Control_Item_B AnimationRipple">
            <i className="fas fa-plus-circle Voyager_Control_Icon_Size_1" />
          </a>
        </div>
        <div className="Show">
          <a className="Voyager_Control_Item_B AnimationRipple">
            <i className="fas fa-expand-arrows-alt Voyager_Control_Icon_Size_1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuVisualView;
