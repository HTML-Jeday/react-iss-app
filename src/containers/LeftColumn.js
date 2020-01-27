import React from "react";
import Location from "../components/Location/Location";

import MapContainer from "../components/Map/MapContainer";
export default class LeftColumn extends React.Component {
  render(props) {
    let { cord } = this.props;

    return (
      <div className="row left">
        <Location cord={cord} />
        <MapContainer cord={cord} />
      </div>
    );
  }
}
