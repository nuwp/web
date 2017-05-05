import { professors } from "../actions/types";

const professorsReducer = (state={
  professorsState: {
    professors: [],
    fetching: false,
    error: null
  }
}, action) => {
  switch (action.type) {
    case professors.FETCH_PROFESSORS_PENDING:
      return {
        ...state,
        fetching: true
      };

    case professors.FETCH_PROFESSORS_FULLFILED:
      return {
        ...state,
        professors: action.payload.data,
        fetching: false,
      };

    case professors.FETCH_PROFESSORS_REJECTED:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default professorsReducer;
