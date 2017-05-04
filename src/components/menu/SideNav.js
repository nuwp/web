import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import { NavLink } from "react-router-dom";

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.onRequestChange = this.onRequestChange.bind(this);
  }

  onRequestChange(open, reason) {
    if (reason === "clickaway" || "escape") {
      this.props.closeSideNav();
    }
  }

  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.sidenavOpen}
        onRequestChange={this.onRequestChange}
      >
        <MenuItem
          onTouchTap={this.props.closeSideNav}
          containerElement={<NavLink activeClassName="active" to="/" />}
        >
          Dashboard
        </MenuItem>

        <MenuItem
          onTouchTap={this.props.closeSideNav}
          containerElement={<NavLink activeClassName="active" to="/classes" />}
        >
          Classes
        </MenuItem>
        <MenuItem
          onTouchTap={this.props.closeSideNav}
          containerElement={<NavLink activeClassName="active" to="/professors" />}
        >
          Professors
        </MenuItem>
      </Drawer>
    );
  }
}

export default SideNav;
