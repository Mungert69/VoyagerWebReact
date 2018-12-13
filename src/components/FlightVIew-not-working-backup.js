import React, { Component } from 'react';
import {DatePicker } from 'antd';
import 'antd/dist/antd.css';
import {apiBaseUrl} from './Constants';

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
    menuPortal: styles => ({ ...styles, zIndex: '9999', }),
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


const Option1 = Select.Option;

function handleChange(value) {
    console.log(`selected ${value}`);
}

function handleBlur() {
    console.log('blur');
}

function handleFocus() {
    console.log('focus');
}




export class FlightView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            airlines: [],
            airports: [],
            outdates: [],
            indates: [],
            loading: true,
            selectedSupplierID: '',
            selectedOutFlightID: '',
            selectedInFlightID: '',
            selectedAirport: '',
            selectedOutDate: '',
            selectedInDate: '',
            costCalcStatus: ''
            
        };
        let str = apiBaseUrl+'api/Flight/GetAirlines/'+ this.props.userId + '/';

        // Get airlines api call
        fetch(str,{cache: "no-store"})
            .then(response => response.json())
            .then(data => {
                this.setState({ airlines: data, loading: false });
            });
        // Get airlines api call


    }

   
    componentWillReceiveProps(nextProps) {
        console.log("In FlightView.componentWillReceiveProps value nextProp changeFlight = " + nextProps.changeFlight + " value of thisProp changeFlight = " + this.props.changeFlight);
        if (this.props.changeFlight !== nextProps.changeFlight) {
            //this.initialiseComponent();
            this.initialiseComponent();
        }
    }

    initialiseComponent() {
        let str = apiBaseUrl+'api/Flight/GetAirlines/'+ this.props.userId + '/';
        this.setState({
            airlines: [],
            airports: [],
            outdates: [],
            indates: [],
            loading: true,
            selectedSupplierID: '',
            selectedOutFlightID: '',
            selectedInFlightID: '',
            selectedAirport: '',
            selectedOutDate: '',
            selectedInDate: '',
            costCalcStatus: ''
        });

        // Get airlines api call
        fetch(str,{cache: "no-store"})
            .then(response => response.json())
            .then(data => {
                this.setState({ airlines: data, loading: false });
            });
        // Get airlines api call
       
    }


    handleChangeAirlines(e) {
        let str = apiBaseUrl+'api/Flight/GetAirports/' + e.target.value + '/' + this.props.userId + '/';
        this.setState({ selectedSupplierID: e.target.value });

        // Get airlines api call
        fetch(str,{cache: "no-store"})
            .then(response => response.json())
            .then(data => {
                this.setState({ airports: data, loading: false });
            });
    }

    handleChangeAirports(e) {
        let str = apiBaseUrl+'api/Flight/GetOutFlight/' + e.target.value + '/' + this.props.userId + '/';
        this.setState({ selectedAirport: e.target.value });

        // Get OutFlights api call
        fetch(str,{cache: "no-store"})
            .then(response => response.json())
            .then(data => {
                this.setState({ outdates: data, loading: false });
            });
    }

    handleChangeOutFlight(e) {
       
        let str = apiBaseUrl+'api/Flight/GetInFlight/' + e.target.value + '/' + e.target.options[e.target.selectedIndex].text +  '/' + this.props.userId + '/';
        this.setState({ selectedOutDate: e.target.options[e.target.selectedIndex].text });
        this.setState({ selectedOutFlightID: e.target.value });

        // Get InFlights api call
        fetch(str,{cache: "no-store"})
            .then(response => response.json())
            .then(data => {
                this.setState({ indates : data, loading: false });
            });
    }

    handleChangeInFlight(e) {
        let str = apiBaseUrl+'api/Flight/GetCost/' + e.target.value + '/' + e.target.options[e.target.selectedIndex].text + '/' + this.props.userId + '/';

        this.setState({ selectedInDate: e.target.options1[e.target.selectedIndex].text });
        this.setState({ selectedInFlightID: e.target.value });
        // Get Cost api call
        fetch(str,{cache: "no-store"})
            .then(response => response.json())
            .then(data => {
                this.setState({ costCalcStatus: data, loading: false });
            });
    }

    checkCost = () => {
        let str = apiBaseUrl+'api/Flight/GetCost/' + this.props.userId + '/';

        // Get Cost api call
        fetch(str,{cache: "no-store"})
            .then(response => response.json())
            .then(data => {
                this.setState({ costCalcStatus: data, loading: false });
            });
    }

    handleSubmit(e) { }

    renderFlightList = () => {
      
        return (
            <form onSubmit={this.handleSubmit}>


<div className="Control_Trip_Flights_Panel">

 <div className="Control_Filter_Panel" > 


  <div className="Control_Filter_Item">
  <l className="Control_Filter_Item_Label">AIRLINE</l>
    <Select
    placeholder="SELECT AIRLINE"

    isSearchable={false}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    formatGroupLabel={formatGroupLabel}
    styles={Control_Filter_Sort_Select_Style}
    options={Control_Trip_Flights_Airline_Data}
    menuPlacement = "auto"
    menuPortalTarget={document.body}
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

    isSearchable={false}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    formatGroupLabel={formatGroupLabel}
    styles={Control_Filter_Sort_Select_Style}
    options={Control_Trip_Flights_Airport_Data}
    menuPlacement = "auto"
    menuPortalTarget={document.body}
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

    isSearchable={false}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    formatGroupLabel={formatGroupLabel}
    styles={Control_Filter_Sort_Select_Style}
    options={Control_Trip_Flights_Departure_Data}
    menuPlacement = "auto"
    menuPortalTarget={document.body}
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

    isSearchable={false}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    closeMenuOnSelect={true}
    components={makeAnimated()}
    components={{ Option: IconOption }}
    styles={Control_Filter_Sort_Select_Style}
    options={Control_Trip_Flights_Return_Data}
    menuPlacement = "auto"
    menuPortalTarget={document.body}
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


















                <label>
                    <span>
                    <select className="Voyager_Control_Select" value={this.state.selectedSupplierID} onChange={this.handleChangeAirlines.bind(this)}>
                        {this.state.airlines.map((flightValue, index) =>

                                <option1 key={index} value={flightValue.supplierID}>{flightValue.airline}</option1>


                        )}//airlines.map

                    </select>

                        <select  className="Voyager_Control_Select" value={this.state.selectedAirport} onChange={this.handleChangeAirports.bind(this)}>
                        {this.state.airports.map((flightValue, index) =>

                            <option1 placeholder="AIRPORT" key={index} value={flightValue.airportName}>{flightValue.airportName}</option1>


                        )}//airports.map

                    </select>
                   
            
                    <select className="Voyager_Control_Select" value={this.state.selectedOutFlightID} onChange={this.handleChangeOutFlight.bind(this)}>
                        {this.state.outdates.map((flightValue, index) =>

                                <option1 key={index} value={flightValue.outFlightID}>{flightValue.flightDepartureShortDate}</option1>


                        )}//airports.map

                    </select>
                    <select className="Voyager_Control_Select" value={this.state.selectedInFlightID} onChange={this.handleChangeInFlight.bind(this)}>
                        {this.state.indates.map((flightValue, index) =>

                                <option1 key={index} value={flightValue.inFlightID}>{flightValue.flightDepartureShortDate}</option1>


                        )}//airports.map

                        </select>
                       
                                     
                     </span>
                </label>
             </div></div>
            </form>
          
        );
    }//renderFlightList

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderFlightList();

        return (
            <div >

                <h1 className="Flight_View_Title">FLIGHTS</h1>
                <h2 className="Flight_View_Flight_Price">{this.state.costCalcStatus}</h2>
         {contents}
            </div>
        );//return
    }//render


}
