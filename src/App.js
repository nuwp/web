import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import theme from "./theme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";
import Login from "./components/Registration/Login";
import Dashboard from "./components/Dashboard/Dashboard";
injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {loggedIn: false};
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({
      loggedIn: true
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="container">
          {this.state.loggedIn ? <Dashboard /> : <Login login={this.login} />}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
