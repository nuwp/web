import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Registration from "./containers/Registration";
import { BrowserRouter, Route } from "react-router-dom";

import Menu from "./containers/Menu";
import Dashboard from "./containers/Dashboard";
import Classes from "./containers/Classes";
import Professors from "./containers/Professors";
import theme from "./theme";
import "./App.css";
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
        <BrowserRouter>
          <div>
            <Menu />
            <Route exact path="/" component={Dashboard} />
            <Route path="/classes" component={Classes} />
            <Route path="/professors" component={Professors} />
            <Route path="/login" component={Registration} />
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
