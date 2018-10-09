import React, { Component } from 'react';

export class FetchData extends Component {
  displayName = FetchData.name

  constructor(props) {
    super(props);
    this.state = { places: [], loading: true };

    fetch('api/Places')
      .then(response => response.json())
      .then(data => {
        this.setState({ places: data, loading: false });
      });
  }

  static renderForecastsTable(places) {
      return (
          
    
      <table className='table'>
        <thead>
                  <tr>
            <th>PlaceNameID</th>
            <th>PlaceName</th>
            <th>UseIT</th>
            <th>ShortPlaceName</th>
            <th>MapOrder</th>
          </tr>
        </thead>
        <tbody>
        {places.map((placeValue, index) =>
              <tr key={index}>
              <td>{placeValue.placeNameId}</td>
              <td>{placeValue.placeName}</td>
              <td>{placeValue.useIt}</td>
              <td>{placeValue.shortPlaceName}</td>
              <td>{placeValue.mapOrder}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : FetchData.renderForecastsTable(this.state.places);

    return (
      <div>
        <h1>Places table</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }
}
