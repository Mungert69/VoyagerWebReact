import React, { Component } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/lib/animated';
import { DatePicker } from 'antd';
import moment from 'moment';


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


const Trip_Flights_Airline = [
{ value: 'Air France', label: 'Air France' },
{ value: 'British Airways', label: 'British Airways' },
{ value: 'Virgin ', label: 'Virgin' }
]   

const Trip_Flights_Airport = [
{ value: 'London', label: 'London' },
{ value: 'Birmingham', label: 'Birmingham' },
{ value: 'Manchester', label: 'Manchester' }
]

const Trip_Flights_Departure = [
{ value: '1', label: 'WEDNESDAY 2 JUNE 2019 12:30' },
{ value: '2', label: 'THURSDAY 3 JUNE 2019 14:30' }
]

const Trip_Flights_Return = [
{ value: '1', label: 'MONDAY 1 JUNE 2019 10:30 8 NIGHTS - REMOVE 3 NIGHTS' },
{ value: '2', label: 'TUESDAY 2 JUNE 2019 16:30 9 NIGHTS - REMOVE 2 NIGHTS' },
{ value: '3', label: 'WEDNESDAY 3 JUNE 2019 12:30 10 NIGHTS - REMOVE 1 NIGHT' },
{ value: '4', label: 'THURSDAY 4 JUNE 2019 14:30 11 NIGHTS' },
{ value: '5', label: 'FRIDAY 5 JUNE 2019 18:30 12 NIGHTS - ADD 1 NIGHT' },
{ value: '6', label: 'SATERDAY 6 JUNE 2019 14:30 13 NIGHTS - ADD 2 NIGHTS' },
{ value: '7', label: 'SUNDAY 7 JUNE 2019 09:30 14 NIGHTS - ADD 3 NIGHTS' }
]
              
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
     
export class Control_Trip_Flights extends Component {

    render() {
        return (

<div>

 <div className="Control_Filter_Panel" > 


  <div className="Control_Filter_Item">
  <span className="Control_Filter_Item_Label">Airline</span>
    <Select
    options={Trip_Flights_Airline}
    placeholder="Select Airline"

    isSearchable={true}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    formatGroupLabel={formatGroupLabel}
    />
</div>


  <div className="Control_Filter_Item">
  <span className="Control_Filter_Item_Label">Airport</span>
    <Select
    options={Trip_Flights_Airport}
    placeholder="Select Airport"

    isSearchable={true}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    formatGroupLabel={formatGroupLabel}
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
  <span className="Control_Filter_Item_Label">Departure Flight</span>
    <Select
    options={Trip_Flights_Departure}
    placeholder="Select Departure Flight"

    isSearchable={true}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    formatGroupLabel={formatGroupLabel}
    />
</div>


  <div className="Control_Filter_Item">
  <span className="Control_Filter_Item_Label">Return Flight</span>
    <Select
    options={Trip_Flights_Return}
    placeholder="Select Return Flight"

    isSearchable={true}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    formatGroupLabel={formatGroupLabel}
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