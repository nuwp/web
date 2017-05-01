const sidenavReducer = (state={open: false}, action) => {
  switch (action.type) {
    case "CLOSE_SIDENAV":
      return {
        open: false
      };

    case "OPEN_SIDENAV":
      return {
        open: true
      };

    case "TOGGLE_SIDENAV":
      return {
        open: !state.open 
      };

    default:
      return state;
  }
};

export default sidenavReducer;
