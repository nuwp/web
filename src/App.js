import React, { Component } from "react";
import injectTapEventPlugin from "react-tap-event-plugin";
import theme from "./theme";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Registration from "./containers/Registration";
import Main from "./containers/Main";
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
        <div className="container">
          {this.state.loggedIn ? <Main /> : <Registration login={this.login} />}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
