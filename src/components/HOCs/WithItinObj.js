import React, { Component } from "react";
import { ItineraryListView } from "../ItineraryListView";
import { apiBaseUrl } from "../Constants";
// This function takes a component...

function withItinObj(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        itinObj: {}
      };
    }

    componentDidMount() {
      if (this.props.card !== undefined && this.props.card !== null) {
        let str = "";
        str =
          apiBaseUrl +
          "api/Itinerary/ItinObj/" +
          this.props.card.id +
          "/" +
          this.props.card.typeId +
          "/";
        // Get  Card
        fetch(str)
          .then(res => res.text())
          .then(text => (text.length ? JSON.parse(text) : {}))
          .then(data => {
            this.setState({ itinObj: data, loading: false });
          });
      }
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
        <WrappedComponent
          itinObj={this.state.itinObj}
          loading={this.state.loading}
          {...this.props}
        />
      );
    }
  };
}

export default withItinObj;