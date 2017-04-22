import React, { Component } from "react";
import Drawer from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";

class SideNav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sideNavOpen: this.props.sideNavOpen
    };
    this.onRequestChange = this.onRequestChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({sideNavOpen:nextProps.sideNavOpen});
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
        open={this.state.sideNavOpen}
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
