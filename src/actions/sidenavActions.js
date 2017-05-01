import { sidenav } from "./types";

export const closeSideNav = () => ({type: sidenav.CLOSE_SIDENAV});
export const openSideNav = () => ({type: sidenav.OPEN_SIDENAV});
export const toggleSideNav = () => ({type: sidenav.TOGGLE_SIDENAV});
