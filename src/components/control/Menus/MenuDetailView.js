import React from "react";

const MenuDetailView = props => {
    var stageIconContent = null;
    if (props.prSelections !== undefined) {
        stageIconContent = props.prSelections.map((selection, index) => {
            <div className="Show">
                <a key="Control_Trip_Stage" className="Voyager_Control_Item_A">
                    <span className="Voyager_Control_Stage_Number_Text">{index}</span>
                </a>
            </div>;
        });
    }
  return (
    <div>
      <div key="" className="flex-container">
        <div className="Show">
          <a key="Control_Trip_Stage" className="Voyager_Control_Item_A">
            <i className="fas fa-layer-group Voyager_Control_Icon_Size_2" />
          </a>
        </div>
         {
              stageIconContent
            }
      </div>
      <div className="flex-container">
        <div className="Show">
          <a
            className="Voyager_Control_Item_A"
            onClick={() => props.changeView("country")}
            title="information"
          >
            <i className="fas fa-book-open Voyager_Control_Icon_Size_2" />
          </a>
        </div>

        <div className="Show">
          <a
            className="Voyager_Control_Item_A"
            onClick={() => props.changeView("place")}
            title="place"
          >
            <i className="fas fa-map-marker Voyager_Control_Icon_Size_2" />
          </a>
        </div>

        <div className="Show">
          <a
            className="Voyager_Control_Item_A"
            onClick={() => props.changeView("hotel")}
            title="hotel"
          >
            <i className="fas fa-home Voyager_Control_Icon_Size_2" />
          </a>
        </div>

        <div className="Show">
          <a
            className="Voyager_Control_Item_A"
            onClick={() => props.changeView("hotel")}
            title="transport"
          >
            <i className="fas fa-bus Voyager_Control_Icon_Size_2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MenuDetailView;
