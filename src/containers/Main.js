import React, { Component } from "react";
import { connect } from "react-redux";
import AppBar from "material-ui/AppBar";
import SideNav from "../components/menu/SideNav";
import { toggleSideNav, closeSideNav } from "../actions/sidenavActions";

const mapStateToProps = (store) => ({sidenav: store.sidenav});

class Main extends Component {
  constructor(props) {
    super(props);
    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.closeSideNav = this.closeSideNav.bind(this);
  }

  toggleSideNav() {
    this.props.dispatch(toggleSideNav());
  }

  closeSideNav() {
    this.props.dispatch(closeSideNav());
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
          sidenavOpen={this.props.sidenav.open}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
