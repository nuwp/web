import { combineReducers } from "redux";
import sidenavState from "./sidenavReducer";
import professorsState from "./professorsReducer";

const reducers = combineReducers({
  sidenavState,
  professorsState
});

export default reducers;
