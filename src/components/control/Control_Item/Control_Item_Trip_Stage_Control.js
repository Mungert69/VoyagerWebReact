import React, { Component } from "react";
export class Control_Item_Trip_Stage_Control extends Component {
  render() {
    return (
<div>



 <div key="" className="flex-container">

<div className="Show">
    <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
    <i className="fas fa-layer-group Voyager_Control_Icon_Size_2"></i>
    </a>
</div>

<div className="Show">
    <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
        <span className="Voyager_Control_Stage_Number_Text" >1</span>
    </a>
</div>

<div className="Show">
    <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
        <span className="Voyager_Control_Stage_Number_Text" >2</span>
    </a>
</div>

<div className="Show">
    <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
        <span className="Voyager_Control_Stage_Number_Text" >3</span>
    </a>
</div>

<div className="Show">
    <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
        <span className="Voyager_Control_Stage_Number_Text" >4</span>
    </a>
</div>

<div className="Show">
    <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
        <span className="Voyager_Control_Stage_Number_Text" >5</span>
    </a>
</div>

<div className="Show">
    <a key="Control_Trip_Stage" className="Voyager_Control_Item_A">
        <span className="Voyager_Control_Stage_Number_Text" >6</span>
    </a>
</div>

<div className="Show">
    <a key="Control_Trip_Stage" className="Voyager_Control_Item_A">
        <span className="Voyager_Control_Stage_Number_Text" >7</span>
    </a>
</div>

<div className="Show">
    <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
        <span className="Voyager_Control_Stage_Number_Text" >8</span>

    </a>
</div>

<div className="Show">
    <a key="Control_Trip_Stage" className="Voyager_Control_Item_A" >
        <span className="Voyager_Control_Stage_Number_Text" >9</span>
    </a>
</div>

</div>


<div  className="flex-container">
<div  className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('country')}>
            <i className="fas fa-book-open Voyager_Control_Icon_Size_2"></i>

        </a>
    </div>



    <div  className="Show">
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('place')}>
            <i className="fas fa-map-marker Voyager_Control_Icon_Size_2"></i>

        </a>
    </div>

    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('hotel')}>
            <i className="fas fa-home Voyager_Control_Icon_Size_2"></i>

        </a>
    </div>


    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('hotel')}>
            <i className="fas fa-bus Voyager_Control_Icon_Size_2"></i>

        </a>
    </div>

</div>
</div>

    );
  }
}
