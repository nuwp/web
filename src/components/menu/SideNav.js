import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

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
        <MenuItem onTouchTap={this.props.closeSideNav}>Dashboard</MenuItem>
        <MenuItem onTouchTap={this.props.closeSideNav}>Classes</MenuItem>
        <MenuItem onTouchTap={this.props.closeSideNav}>Professors</MenuItem>
      </Drawer>
    );
  }
}

export default SideNav;
