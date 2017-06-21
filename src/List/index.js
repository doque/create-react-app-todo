import React, { Component } from "react";
import _ from 'lodash';

import "./List.css";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSkills: []
    };
    this.skills = ["Zahnreinigung", "Fußball", "Tennis", "Golf", "Segeln"];
  };

  handleSelection(skill) {
    const { selectedSkills } = this.state;

    if (selectedSkills.indexOf(skill) > -1) {
      selectedSkills.splice(selectedSkills.indexOf(skill), 1);
    } else {
      selectedSkills.push(skill);
    }
    this.setState({
      selectedSkills: [...new Set(selectedSkills)] // no duplicates
    });
  }

  doctorHasSkills(doctor) {
    return _.intersection(doctor.skills, this.state.selected).length > 1;
  }

  render() {
    return (
      <div className="List">
        <h2>Ausgewählte Ärzte</h2>
        
        <ul className="Skills">
          {this.skills.map(skill =>
             <li onClick={() => this.handleSelection(skill) }>
              {
                this.state.selectedSkills.indexOf(skill) > -1
                ? <strong>{skill}</strong>
                : skill
              }
            </li>
          )}
        </ul>

        {this.props.doctors.map(doctor => {
          <div className="Doctor">
            <strong>{doctor.name}</strong> kann {doctor.skills.join(", ")}
          </div>
        })}
      </div>
    );
  }
}

export default List;
