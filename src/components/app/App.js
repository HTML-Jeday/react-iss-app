import React from "react";
import "./App.css";
import LeftColumn from "../../containers/LeftColumn";
import RightColumn from "../../containers/RightColumn";
import axios from "axios";

export default class App extends React.Component {
  state = {
    people: [],
    cords: {}
  };
  componentDidMount() {
    this.getData();
    this.interval = setInterval(() => this.getData(), 5000);
  }

  getData() {
    // получем координаты МКС
    axios.get("http://api.open-notify.org/iss-now.json").then(res => {
      const cords = res.data.iss_position;
      this.setState({ cords });
    });

    // получаем список людей которые находятся на МКС
    axios.get("http://api.open-notify.org/astros.json").then(res => {
      //получаем весь список людей находящихся в космосе
      let arr = res.data.people;
      //фильтруем людей находящихся в космосе , чтобы получить список людей на МКС
      let people = [];
      arr.filter(obj => {
        if (obj.craft === "ISS") {
          people.push(obj);
        }
        return people;
      });

      this.setState({ people });
    });
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    const { cords, people } = this.state;
    return (
      <div className="App">
        <LeftColumn cord={cords} />
        <RightColumn people={people} />
      </div>
    );
  }
}
