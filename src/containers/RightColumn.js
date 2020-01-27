import React from "react";
import Time from "../components/Time/Time";
import People from "../components/People/People";

export default class RightColumn extends React.Component {
  render() {
    let { people } = this.props;

    return (
      <div className="row right">
        <Time />
        <People people={people} />
      </div>
    );
  }
}
