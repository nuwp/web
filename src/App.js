import React, { Component } from "react";
import Login from "./components/Registration/Login";
import theme from "./theme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Drawer from "material-ui/Drawer";
import "./App.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {loggedIn: false};
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className="container">
          {this.state.loggedIn ? <AppBar title="NU Web Planner" /> : <Login />}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
