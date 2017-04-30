import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import "./LoginForm.css";

class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.textFieldStyle = {
      width: "100%"
    };
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.name === "email") {
      this.setState({
        email: e.target.value,
        password: this.state.password
      });
    } else if (e.target.name === "password") {
      this.setState({
        email: this.state.email,
        password: e.target.value
      });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextField
          name="email"
          style={this.textFieldStyle}
          floatingLabelText="Email"
          onChange={this.handleChange}
        />
        <TextField
          name="password"
          style={this.textFieldStyle}
          className="form-elements"
          floatingLabelText="Password"
          type="password"
          onChange={this.handleChange}
        />
        <RaisedButton
          primary
          fullWidth
          type="submit"
          label="Login"
        />
        <RaisedButton
          fullWidth
          label="Signup"
        />
      </form>
    );
  }
}

export default LoginForm;
