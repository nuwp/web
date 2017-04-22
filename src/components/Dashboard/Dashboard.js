import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import SideNav from "./SideNav";

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sideNavOpen: false
    };
    this.toggleSideNav = this.toggleSideNav.bind(this);
  }

  toggleSideNav() {
    this.setState(() => {
      return {
        sideNavOpen: !this.state.sideNavOpen
      };
    });
  }

  render() {
    return (
      <div>
        <AppBar
          title="NU Web Planner"
          onLeftIconButtonTouchTap={this.toggleSideNav}
        />
        <SideNav sideNavOpen={this.state.sideNavOpen} />
      </div>
    );
  }
}

export default Dashboard;
