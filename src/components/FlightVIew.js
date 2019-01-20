import React, { Component } from "react";
import { DatePicker } from "antd";
import "antd/dist/antd.css";
import { apiBaseUrl } from "./Constants";
import FormatFlightData from "../Objects/FormatFlightData";
import Select from "react-select";
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
    this.setState({
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
      e.value +
      "/" +
      this.props.userId +
      "/";
    this.setState({ selectedSupplierID: e.value });

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
      e.value +
      "/" +
      this.props.userId +
      "/";
    this.setState({ selectedAirport: e.value });

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
      e.value +
      "/" +
      e.label +
      "/" +
      this.props.userId +
      "/";
    this.setState({
      selectedOutDate: e.label
    });
    this.setState({ selectedOutFlightID: e.value });

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
      e.value +
      "/" +
      e.label +
      "/" +
      this.props.userId +
      "/";

    this.setState({
      selectedInDate: e.label
    });
    this.setState({ selectedInFlightID: e.value });
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
       
       <div>
       
        <div className="Control_Filter_Item_Inline">
          <l className="Control_Filter_Item_Label">AIRLINE</l>
          <Select
            placeholder="SELECT AIRLINE"
            value={this.state.selectedSupplierID}
            onChange={this.handleChangeAirlines.bind(this)}
            options={this.state.flightData.airlines}
          />
        </div>

        <div className="Control_Filter_Item_Inline">
          <span className="Control_Filter_Item_Label">AIRPORT</span>
          <Select
            placeholder="SELECT AIRPORT"
            value={this.state.selectedAirport}
            onChange={this.handleChangeAirports.bind(this)}
            options={this.state.flightData.airports}
          />
        </div>
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
            value={this.state.selectedOutFlightID}
            onChange={this.handleChangeOutFlight.bind(this)}
            options={this.state.flightData.outDates}
          />
        </div>

        <div className="Control_Filter_Item">
          <span className="Control_Filter_Item_Label">RETURN FLIGHT</span>
          <Select
            placeholder="SELECT RETURN FLIGHT"
            value={this.state.selectedInFlightID}
            onChange={this.handleChangeInFlight.bind(this)}
            options={this.state.flightData.inDates}
          />
        </div>
      </form>
    );
  }; //renderFlightList

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      this.renderFlightList()
    );

    return (
      <div>
        <h1 className="Hide">MY FLIGHTS</h1> 
        <h2 className="Flight_View_Flight_Price">{this.state.costCalcStatus}</h2>
        {contents}
       <br></br>     <br></br><br></br>     <br></br>
      </div>
    ); //return
  } //render
}
