import React, { Component } from 'react';
import { Switch, DatePicker, Slider, Select } from 'antd';
import 'antd/dist/antd.css';
import {apiBaseUrl} from './Constants';

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
        let str = apiBaseUrl+'api/Flight/GetAirlines';

        // Get airlines api call
        fetch(str)
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
        let str = apiBaseUrl+'api/Flight/GetAirlines';
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
        fetch(str)
            .then(response => response.json())
            .then(data => {
                this.setState({ airlines: data, loading: false });
            });
        // Get airlines api call
       
    }


    handleChangeAirlines(e) {
        let str = apiBaseUrl+'api/Flight/GetAirports/' + e.target.value;
        this.setState({ selectedSupplierID: e.target.value });

        // Get airlines api call
        fetch(str)
            .then(response => response.json())
            .then(data => {
                this.setState({ airports: data, loading: false });
            });
    }

    handleChangeAirports(e) {
        let str = apiBaseUrl+'api/Flight/GetOutFlight/' + e.target.value;
        this.setState({ selectedAirport: e.target.value });

        // Get OutFlights api call
        fetch(str)
            .then(response => response.json())
            .then(data => {
                this.setState({ outdates: data, loading: false });
            });
    }

    handleChangeOutFlight(e) {
       
        let str = apiBaseUrl+'api/Flight/GetInFlight/' + e.target.value + '/' + e.target.options[e.target.selectedIndex].text + '/';
        this.setState({ selectedOutDate: e.target.options[e.target.selectedIndex].text });
        this.setState({ selectedOutFlightID: e.target.value });

        // Get InFlights api call
        fetch(str)
            .then(response => response.json())
            .then(data => {
                this.setState({ indates : data, loading: false });
            });
    }

    handleChangeInFlight(e) {
        let str = apiBaseUrl+'api/Flight/GetCost/' + e.target.value + '/' + e.target.options[e.target.selectedIndex].text + '/';

        this.setState({ selectedInDate: e.target.options[e.target.selectedIndex].text });
        this.setState({ selectedInFlightID: e.target.value });
        // Get Cost api call
        fetch(str)
            .then(response => response.json())
            .then(data => {
                this.setState({ costCalcStatus: data, loading: false });
            });
    }

    checkCost = () => {
        let str = apiBaseUrl+'api/Flight/GetCost';

        // Get Cost api call
        fetch(str)
            .then(response => response.json())
            .then(data => {
                this.setState({ costCalcStatus: data, loading: false });
            });
    }

    handleSubmit(e) { }

    renderFlightList = () => {
      
        return (
            <form onSubmit={this.handleSubmit}>

                
                <label>
                    <span>
                    <select className="Voyager_Control_Select" value={this.state.selectedSupplierID} onChange={this.handleChangeAirlines.bind(this)}>
                        {this.state.airlines.map((flightValue, index) =>

                                <option key={index} value={flightValue.supplierID}>{flightValue.airline}</option>


                        )}//airlines.map

                    </select>

                        <select  className="Voyager_Control_Select" value={this.state.selectedAirport} onChange={this.handleChangeAirports.bind(this)}>
                        {this.state.airports.map((flightValue, index) =>

                            <option placeholder="AIRPORT" key={index} value={flightValue.airportName}>{flightValue.airportName}</option>


                        )}//airports.map

                    </select>
                   
            
                    <select className="Voyager_Control_Select" value={this.state.selectedOutFlightID} onChange={this.handleChangeOutFlight.bind(this)}>
                        {this.state.outdates.map((flightValue, index) =>

                                <option key={index} value={flightValue.outFlightID}>{flightValue.flightDepartureShortDate}</option>


                        )}//airports.map

                    </select>
                    <select className="Voyager_Control_Select" value={this.state.selectedInFlightID} onChange={this.handleChangeInFlight.bind(this)}>
                        {this.state.indates.map((flightValue, index) =>

                                <option key={index} value={flightValue.inFlightID}>{flightValue.flightDepartureShortDate}</option>


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
