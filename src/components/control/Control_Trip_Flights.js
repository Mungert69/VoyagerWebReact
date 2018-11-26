import React, { Component } from 'react';

import { DatePicker } from 'antd';
import moment from 'moment';

import Select from 'react-select';
import { components } from 'react-select';

import makeAnimated from 'react-select/lib/animated';
import { Control_Trip_Flights_Airline_Data, Control_Trip_Flights_Airport_Data, Control_Trip_Flights_Departure_Data, Control_Trip_Flights_Return_Data, groupedOptions } from './data';
import chroma from 'chroma-js';

const Control_Filter_Sort_Select_Style = {  

  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? null
        : isSelected ? data.color : isFocused ? color.alpha(0.1).css() : null,
      color: isDisabled
        ? '#ccc'
        : isSelected
          ? chroma.contrast(color, 'white') > 2 ? 'white' : 'black'
          : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      textTransform: 'uppercase'
      
    };
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color);
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css(),
      borderRadius: 6,
 
    };
  },

  control: styles => ({ ...styles, backgroundColor: 'Transparent',  borderColor: '#f2f2f2',    borderRadius: 0,  borderWidth: 3,   borderLeft: 'none',  borderRight: 'none',   borderTop: 'none', boxShadow: 'none', textTransform: 'uppercase',  fontFamily: 'Open Sans', letterSpacing:'1px', fontWeight:'600'}),
  multiValueLabel: styles => ({ ...styles, backgroundColor: '#f2f2f2',      color: '#666',  borderTopRightRadius: 6, borderBottomRightRadius: 6,borderTopLeftRadius: 6, borderBottomLeftRadius: 6 }),
  multiValueRemove: styles => ({ ...styles, backgroundColor: '#f2f2f2',   borderTopRightRadius: 6, borderBottomRightRadius: 6 }),
  groupHeading: styles => ({ ...styles, backgroundColor: '#f5f5f5', color: '#666',  borderTopRightRadius:9, borderBottomRightRadius: 9, marginRight:10, textTransform: 'uppercase',  fontFamily: 'Open Sans', letterSpacing:'1px', fontWeight:'600', fontSize:'14' }),
  placeholder: styles => ({ ...styles,  color: '#666',  textTransform: 'uppercase',  fontFamily: 'Open Sans', letterSpacing:'1px', fontWeight:'600', fontSize:'14' }),
  singleValue: styles => ({ ...styles,  color: '#0071bc', }),

};



const { MonthPicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}



 
              const groupStyles = {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              };
              const groupBadgeStyles = {
                backgroundColor: '#EBECF0',
                borderRadius: '2em',
                color: '#172B4D',
                display: 'inline-block',
                fontSize: 12,
                fontWeight: 'normal',
                lineHeight: '1',
                minWidth: 1,
                padding: '0.16666666666667em 0.5em',
                textAlign: 'center',
              };
              
              const formatGroupLabel = data => (
                <div style={groupStyles}>
                  <span>{data.label}</span>
                  <span style={groupBadgeStyles}>{data.options.length}</span>
                </div>
              );
     

              const { Option } = components;
const IconOption = (props) => (
    <Option {...props}>
               <div class="Control_Position_outer_wrapper">
                        <div className="Control_Position_left Control_Position_inner_wrapper">
                        <span className="Control_Trip_Flights_Return_Date">{props.data.label}</span>
                        </div>

                        <div className="Control_Position_center Control_Position_inner_wrapper">
      <span className="Control_Trip_Flights_Return_Night_Total"> {props.data.nighttotal}</span>
                        </div>

                        <div className="Control_Position_right Control_Position_inner_wrapper">
                        <span className="Control_Trip_Flights_Return_Night_AddRemove"><i className="fas fa-moon"></i> {props.data.nightaddremove}</span>
                        </div>
                    </div>

      

      
    </Option>
);

export class Control_Trip_Flights extends Component {

    render() {
        return (

<div className="Control_Trip_Flights_Panel">

 <div className="Control_Filter_Panel" > 


  <div className="Control_Filter_Item">
  <span className="Control_Filter_Item_Label">AIRLINE</span>
    <Select
    placeholder="SELECT AIRLINE"

    isSearchable={true}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    formatGroupLabel={formatGroupLabel}
    styles={Control_Filter_Sort_Select_Style}
    options={Control_Trip_Flights_Airline_Data}
    theme={(theme) => ({
      ...theme,
      borderRadius: 3,
      colors: {
      ...theme.colors,
        text: '#666',
        primary25: '#F5F5F5',
        primary: '#0071bc',
      },
    })}
    />
</div>


  <div className="Control_Filter_Item">
  <span className="Control_Filter_Item_Label">AIRPORT</span>
    <Select
    placeholder="SELECT AIRPORT"

    isSearchable={true}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    formatGroupLabel={formatGroupLabel}
    styles={Control_Filter_Sort_Select_Style}
    options={Control_Trip_Flights_Airport_Data}
    theme={(theme) => ({
      ...theme,
      borderRadius: 3,
      colors: {
      ...theme.colors,
        text: '#666',
        primary25: '#F5F5F5',
        primary: '#0071bc',
      },
    })}
    />
</div>


<div className="Control_Filter_Item">
<span className="Control_Filter_Item_Label">Approximate departure date</span>
<br></br>
 <DatePicker
    format="YYYY-MM-DD"
    disabledDate={disabledDate}
    disabledTime={disabledDateTime}
    placeholder="Select Approximate departure date"
    className="Control_Trip_Flight_Approximate_Date"
    />
   </div>



  <div className="Control_Filter_Item">
  <span className="Control_Filter_Item_Label">DEPARTURE FLIGHT</span>
    <Select
    placeholder="SELECT DEPARTURE FLIGHT"

    isSearchable={true}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    formatGroupLabel={formatGroupLabel}
    styles={Control_Filter_Sort_Select_Style}
    options={Control_Trip_Flights_Departure_Data}
    theme={(theme) => ({
      ...theme,
      borderRadius: 3,
      colors: {
      ...theme.colors,
        text: '#666',
        primary25: '#F5F5F5',
        primary: '#0071bc',
      },
    })}
    />
</div>

  <div className="Control_Filter_Item">
  <span className="Control_Filter_Item_Label">RETURN FLIGHT</span>
    <Select
    placeholder="SELECT RETURN FLIGHT"

    isSearchable={true}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    components={{ Option: IconOption }}
    styles={Control_Filter_Sort_Select_Style}
    options={Control_Trip_Flights_Return_Data}

    theme={(theme) => ({
      ...theme,
      borderRadius: 3,
      colors: {
      ...theme.colors,
        text: '#666',
        primary25: '#F5F5F5',
        primary: '#0071bc',
      },
    })}
    />
</div>
  <span className="Control_Filter_Item_Label">Nights are modified on first place by default</span>

</div>

 <div className="Control_3_1">

<div  className="flex-container">
    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('dates_close')}>
            <i className="fas fa-times Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >close</span>
        </a>
    </div>
   

    <div className="Show" >
        <a className="Voyager_Control_Item_A" onClick={() => this.props.changeView('dates_update')}>
            <l></l>
            <i className="fas fa-check Voyager_Control_Icon_Size_2"></i>
            <span className="Voyager_Control_Text_Size_1_Link" >Update</span>
        </a>
    </div>
</div>
</div>

</div>




        );
    }
}