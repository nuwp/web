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
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
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

  onSubmit(e) {
    e.preventDefault();
    alert(this.state.email + this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          name="email"
          style={this.textFieldStyle}
          floatingLabelText="Email"
          onChange={this.onChange}
        />
        <TextField
          name="password"
          style={this.textFieldStyle}
          className="form-elements"
          floatingLabelText="Password"
          type="password"
          onChange={this.onChange}
        />
        <RaisedButton
          className="form-elements"
          primary
          type="submit"
          label="Login"
        />
        <RaisedButton
          className="form-elements"
          label="Signup"
        />
      </form>
    );
  }
}

export default LoginForm;
