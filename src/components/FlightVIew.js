import React, { Component } from 'react';
import { Switch, DatePicker, Slider, Select } from 'antd';
import 'antd/dist/antd.css';
import {apiBaseUrl} from './Constants';
import FormatFlightData from '../Objects/FormatFlightData';

const Option = Select.Option;

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
        var formatFlightData = new FormatFlightData();
        this.state = {
          flightData: formatFlightData,
          loading: true,
          selectedSupplierID: "",
          selectedOutFlightID: "",
          selectedInFlightID: "",
          selectedAirport: "",
          selectedOutDate: "",
          selectedInDate: "",
          costCalcStatus: ""
        };
        let str = apiBaseUrl + "api/Flight/GetAirlines/" + this.props.userId + "/";
    
        // Get airlines api call
        fetch(str, { cache: "no-store" })
          .then(response => response.json())
          .then(data => {
            let newData = this.state.flightData;
            newData.setAirlines(data);
            this.setState({ flightData: newData, loading: false });
          });
        // Get airlines api call
      }
    
      componentWillReceiveProps(nextProps) {
        console.log(
          "In FlightView.componentWillReceiveProps value nextProp changeFlight = " +
            nextProps.changeFlight +
            " value of thisProp changeFlight = " +
            this.props.changeFlight
        );
        if (this.props.changeFlight !== nextProps.changeFlight) {
          //this.initialiseComponent();
          //this.initialiseComponent();
        }
      }
    
      initialiseComponent() {
        let str = apiBaseUrl + "api/Flight/GetAirlines/" + this.props.userId + "/";
        var formatFlightData = new FormatFlightData();
        this.setState ({
          flightData: formatFlightData,
          loading: true,
          selectedSupplierID: "",
          selectedOutFlightID: "",
          selectedInFlightID: "",
          selectedAirport: "",
          selectedOutDate: "",
          selectedInDate: "",
          costCalcStatus: ""
        });
    
        // Get airlines api call
        fetch(str, { cache: "no-store" })
          .then(response => response.json())
          .then(data => {
            let newData = this.state.flightData;
            newData.setAirlines(data);
            this.setState({ flightData: newData, loading: false });
          });
        // Get airlines api call
      }
    
      handleChangeAirlines(e) {
        let str =
          apiBaseUrl +
          "api/Flight/GetAirports/" +
          e.target.value +
          "/" +
          this.props.userId +
          "/";
        this.setState({ selectedSupplierID: e.target.value });
    
        // Get airlines api call
        fetch(str, { cache: "no-store" })
          .then(response => response.json())
          .then(data => {
            let newData = this.state.flightData;
            newData.setAirports(data);
            this.setState({ flightData: newData, loading: false });
          });
      }
    
      handleChangeAirports(e) {
        let str =
          apiBaseUrl +
          "api/Flight/GetOutFlight/" +
          e.target.value +
          "/" +
          this.props.userId +
          "/";
        this.setState({ selectedAirport: e.target.value });
    
        // Get OutFlights api call
        fetch(str, { cache: "no-store" })
          .then(response => response.json())
          .then(data => {
            let newData = this.state.flightData;
            newData.setOutDates(data);
            this.setState({ fligtData: newData, loading: false });
          });
      }
    
      handleChangeOutFlight(e) {
        let str =
          apiBaseUrl +
          "api/Flight/GetInFlight/" +
          e.target.value +
          "/" +
          e.target.options[e.target.selectedIndex].text +
          "/" +
          this.props.userId +
          "/";
        this.setState({
          selectedOutDate: e.target.options[e.target.selectedIndex].text
        });
        this.setState({ selectedOutFlightID: e.target.value });
    
        // Get InFlights api call
        fetch(str, { cache: "no-store" })
          .then(response => response.json())
          .then(data => {
            let newData = this.state.flightData;
            newData.setInDates(data);
            this.setState({ flightData: newData, loading: false });
          });
      }
    
      handleChangeInFlight(e) {
        let str =
          apiBaseUrl +
          "api/Flight/GetCost/" +
          e.target.value +
          "/" +
          e.target.options[e.target.selectedIndex].text +
          "/" +
          this.props.userId +
          "/";
    
        this.setState({
          selectedInDate: e.target.options1[e.target.selectedIndex].text
        });
        this.setState({ selectedInFlightID: e.target.value });
        // Get Cost api call
        fetch(str, { cache: "no-store" })
          .then(response => response.json())
          .then(data => {
            this.setState({ costCalcStatus: data, loading: false });
          });
      }
    
      checkCost = () => {
        let str = apiBaseUrl + "api/Flight/GetCost/" + this.props.userId + "/";
    
        // Get Cost api call
        fetch(str, { cache: "no-store" })
          .then(response => response.json())
          .then(data => {
            this.setState({ costCalcStatus: data, loading: false });
          });
      };
    
      handleSubmit(e) {}
    
    renderFlightList = () => {
      
        return (
            <form onSubmit={this.handleSubmit}>

                
                <label>
                    <span>
                    <select className="Voyager_Control_Select" value={this.state.selectedSupplierID} onChange={this.handleChangeAirlines.bind(this)}>
                        {this.state.flightData.airlines.map((flightValue, index) =>

                    <option key={index} value={flightValue.value}>{flightValue.label}</option>


                        )}//airlines.map

                    </select>

                        <select  className="Voyager_Control_Select" value={this.state.selectedAirport} onChange={this.handleChangeAirports.bind(this)}>
                        {this.state.flightData.airports.map((flightValue, index) =>

                            <option placeholder="AIRPORT" key={index} value={flightValue.value}>{flightValue.label}</option>


                        )}//airports.map

                    </select>
                   
            
                    <select className="Voyager_Control_Select" value={this.state.selectedOutFlightID} onChange={this.handleChangeOutFlight.bind(this)}>
                        {this.state.flightData.outDates.map((flightValue, index) =>

                                <option key={index} value={flightValue.value}>{flightValue.label}</option>


                        )}//airports.map

                    </select>
                    <select className="Voyager_Control_Select" value={this.state.selectedInFlightID} onChange={this.handleChangeInFlight.bind(this)}>
                        {this.state.flightData.inDates.map((flightValue, index) =>

                                <option key={index} value={flightValue.value}>{flightValue.label}</option>


                        )}//airports.map

                        </select>
                        <DatePicker className="Voyager_Control_Select" />
                                     
                     </span>
                </label>
             
            </form>
          
        );
    }//renderFlightList

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderFlightList();

        return (
            <div >

                <h1 className="Voyager_Title_2">MY FLIGHTS</h1>
                {contents}
                <h2 className="Voyager_Title_1">{this.state.costCalcStatus}</h2>
            </div>
        );//return
    }//render


}
