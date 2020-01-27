import React from "react";
import {
  getWeekDay,
  getMonths,
  getUTCMinutes
} from "../../utils/utilsFunctions";
export default class Time extends React.Component {
  state = {
    d: new Date()
  };
  componentDidMount() {
    this.timer = setInterval(() => this.setState({ d: new Date() }), 5000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  Timer = () => {
    let { d } = this.state;
    return (
      <React.Fragment>
        <strong>
          Current UTC time {d.getHours()}:{getUTCMinutes()}
        </strong>
        <div>
          {getWeekDay()}, {d.getUTCDate()} {getMonths().substr(0, 3)}{" "}
          {d.getUTCFullYear()}
        </div>
      </React.Fragment>
    );
  };

  render() {
    return <div className="time top">{this.Timer()}</div>;
  }
}
