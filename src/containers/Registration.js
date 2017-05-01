import React, { Component } from "react";
import LoginForm from "../components/registration/LoginForm";
import "./Registration.css";

class Registration extends Component {

  render() {
    return (
      <div className="login">
        <LoginForm login={this.props.login}/>
      </div>
    );
  }
}

export default Registration;
