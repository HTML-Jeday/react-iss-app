import React from "react";
export default class Location extends React.Component {
  render() {
    let { longitude, latitude } = this.props.cord;

    return (
      <div className="location top">
        <h1>ISS is now located at:</h1>
        <span>
          longitude: {longitude}, latitude: {latitude}
        </span>
      </div>
    );
  }
}
