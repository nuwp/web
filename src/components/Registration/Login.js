import React, { Component } from "react";
import LoginForm from "./LoginForm";
import "./Login.css";

class Login extends Component {

  render() {
    return (
      <div className="login">
        <LoginForm login={this.props.login}/>
      </div>
    );
  }
}

export default Login;
