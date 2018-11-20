import React, { Component } from "react";
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/lib/animated';


const Control_Detail_Level = [
  { value: '0', label: 'detail low', color: '#8ebac2' },
  { value: '1', label: 'detail medium', color: '#6a8b91' },
  { value: '2', label: 'detail high', color: '#475d61' }
]   


const colourStyles = {
  control: styles => ({ ...styles, backgroundColor: 'white',          border: 'none', boxShadow: 'none',}),
};

export class Control_Item_Detail_Level extends Component {
  
  render() {
    return (
      <div>

        <div  className="Voyager_Control_Select_Detail_Level">
    <Select
    key="Control_Detail_Level" 
    options={Control_Detail_Level}
    placeholder="DETAIL LEVEL"
    closeMenuOnSelect={false}
    components={makeAnimated()}
    styles={colourStyles}

className="multi-select"
style={{
    Border: '0px;'
  }}
    theme={(theme) => ({
      ...theme,
      borderRadius: 3,
      borderBottom: 10,
      spacing: {
controlHeight: 20,
baseUnit: 2,
menuGutter: 2,
},
      colors: {
      ...theme.colors,
        text: '#666',
        primary25: '#F5F5F5',
        primary: '#0071bc',
      },
    })}
    />
</div>
</div>
    );
  }
}
