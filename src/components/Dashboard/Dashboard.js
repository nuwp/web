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
    this.closeSideNav = this.closeSideNav.bind(this);
  }

  toggleSideNav() {
    this.setState(() => {
      return {
        sideNavOpen: !this.state.sideNavOpen
      };
    });
  }

  closeSideNav() {
    this.setState({sideNavOpen: false});
  }

  render() {
    return (
      <div>
        <AppBar
          title="NU Web Planner"
          onLeftIconButtonTouchTap={this.toggleSideNav}
        />
        <SideNav
          closeSideNav={this.closeSideNav}
          sideNavOpen={this.state.sideNavOpen}
        />
      </div>
    );
  }
}

export default Dashboard;
