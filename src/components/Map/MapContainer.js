import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends React.Component {
  render(props) {
    const { cord } = this.props;
    const obj = {
      lat: cord.latitude,
      lng: cord.longitude
    };

    return (
      <div className="map">
        <Map google={this.props.google} zoom={4} center={obj}>
          <Marker name={"Current location"} position={obj} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBrAZOs-40xADB8ktMKJPjlnIwxwET7he8"
})(MapContainer);
