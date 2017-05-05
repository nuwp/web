import React, { Component } from "react";

class ProfessorsList extends Component {
  render() {
    // console.log(this.props.professors);
    // return null;
    return (
      <ul>
        {this.props.professors.map((professor) => {
          return (
            <li key={professor.first}>
              {professor.first} {professor.last}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ProfessorsList;
