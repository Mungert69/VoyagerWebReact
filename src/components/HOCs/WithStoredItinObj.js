import React, { Component } from "react";
import { apiBaseUrl } from "../Constants";
// This function takes a component...

function withStoredItinObj(WrappedComponent) {
  // ...and returns another component...
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        storedItinObj: {}
      };
    }

    componentDidMount() {
      if (this.props.card !== undefined && this.props.card !== null) {
        let str = "";
        str =
          apiBaseUrl +"api/Itinerary/StoredItinObj";
        // Get  Card
        fetch(str,{cache: "no-store"})
          .then(res => res.text())
          .then(text => (text.length ? JSON.parse(text) : {}))
          .then(data => {
            this.setState({ storedItinObj: data, loading: false });
          });
      }
    }

    render() {
      // ... and renders the wrapped component with the fresh data!
      // Notice that we pass through any additional props
      return (
        <WrappedComponent
          storedItinObj={this.state.storedItinObj}
          loading={this.state.loading}
          {...this.props}
        />
      );
    }
  };
}

export default withStoredItinObj;