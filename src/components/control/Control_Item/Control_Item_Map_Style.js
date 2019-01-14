import React, { Component } from "react";
import Select, { components } from 'react-select';
import makeAnimated from 'react-select/lib/animated';


const Control_Item_Map_Style_Data = [
  { value: '0', label: 'style trip', color: '#8ebac2' },
  { value: '1', label: 'style place', color: '#6a8b91' },
  { value: '2', label: 'style hotel', color: '#475d61' }
]   


const Control_Detail_Select_Style = {  


  menuPortal: styles => ({ ...styles, zIndex: '9999', }),
  control: styles => ({ ...styles,  backgroundColor: 'Transparent',  borderColor: '#f2f2f2',    borderRadius: 0,  borderWidth: 3,   borderLeft: 'none',  borderRight: 'none',   borderTop: 'none', boxShadow: 'none', textTransform: 'uppercase',  fontFamily: 'Open Sans', letterSpacing:'1px', fontWeight:'600', fontSize:'10'}),
  multiValueLabel: styles => ({ ...styles, backgroundColor: '#f2f2f2',      color: '#666',  borderTopRightRadius: 6, borderBottomRightRadius: 6,borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }),
  multiValueRemove: styles => ({ ...styles, backgroundColor: '#f2f2f2',   borderTopRightRadius: 6, borderBottomRightRadius: 6 }),
  groupHeading: styles => ({ ...styles, backgroundColor: '#f5f5f5', color: '#666',  borderTopRightRadius:9, borderBottomRightRadius: 9, marginRight:10, textTransform: 'uppercase',  fontFamily: 'Open Sans', letterSpacing:'1px', fontWeight:'600', fontSize:'6' }),
  placeholder: styles => ({ ...styles,  color: '#666',  textTransform: 'uppercase',  fontFamily: 'Open Sans', letterSpacing:'1px', fontWeight:'600', fontSize:'2' }),
  singleValue: styles => ({ ...styles,  color: '#666', }),

};

export class Control_Item_Map_Style extends Component {
  
  render() {
    return (
      <div>

        <div  className="Control_Item_Map_Style">
    <Select
    key="Control_Item_Map_Style" 
    options={Control_Item_Map_Style_Data}
    placeholder="MAP STYLE"
    closeMenuOnSelect={true}
    components={makeAnimated()}
    styles={Control_Detail_Select_Style}
    menuPortalTarget={document.body}
 


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
