import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { fetchProfessors } from "../actions/professorsActions";
import CircularProgress from "material-ui/CircularProgress";
import ProfessorsList from "../components/professors/ProfessorsList";

const mapStateToProps = (store) => ({
  professorsState: store.professorsState
});

class Professors extends Component {
  componentDidMount() {
    this.props.dispatch(fetchProfessors());
  }

  render() {
    let professorsState = this.props.professorsState;
    return (
      <div className="professors">
        {professorsState.fetching && !professorsState.professors &&
          <CircularProgress />}
        {professorsState.professors && !professorsState.error &&
          <ProfessorsList professors={professorsState.professors} />}
        {professorsState.error && <h1>{professorsState.error.message}</h1>}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Professors);
