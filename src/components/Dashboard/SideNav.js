import React, { Component } from "react";
import Drawer from "material-ui/Drawer";

class SideNav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: this.props.sideNavOpen
    };
  }

  toggleSideNav() {
    this.setState({open:this.props.sideNavOpen});
    return this.state.open;
  }
  closeDrawer() {
    this.setState({ open: false });
  }

  render() {
    // console.log(this.state.open);
    console.log(this.props.sideNavOpen);
    return (
      <Drawer
        docked={false}
        open={this.state.open}
        onRequestChange={this.closeDrawer}
      />
    );
  }
}

export default SideNav;
