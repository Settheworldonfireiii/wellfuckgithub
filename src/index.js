import React from 'react';
import {geolocated} from 'react-geolocated';
import ReactDOM from 'react-dom';

class Demo extends React.Component {
  render() {
    console.log(this.props)
    return !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation </div>
      : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div>
        : this.props.coords
          ? <table>
            <tbody>
              <tr><td>latitude</td><td>{this.props.coords.latitude}</td></tr>
              <tr><td>longitude</td><td>{this.props.coords.longitude}</td></tr>
            </tbody>
          </table>
          : <div>Getting the location data&hellip; </div>;
  }
}

const Wrapper = geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Demo);



ReactDOM.render(
  <Wrapper />,
  document.getElementById('root')
);
