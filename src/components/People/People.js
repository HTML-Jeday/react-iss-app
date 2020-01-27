import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default class People extends React.Component {
  render(props) {
    let { people } = this.props;
    return (
      <React.Fragment>
        <div className="people-list">
          <ul>
            {people.map((p, i) => {
              return (
                <li key={i}>
                  <FontAwesomeIcon icon={faUser} /> {p.name}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="amount">
          Total amount: {people.length} people on ISS
        </div>
      </React.Fragment>
    );
  }
}
