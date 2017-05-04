import { professors } from "./types";
import axios from "axios";

export const fetchProfessors = () => {
  return (dispatch) => {
    dispatch({
      type: professors.FETCH_PROFESSORS_PENDING
    });
    axios.get("/v2/590951c6100000130247c09e")
      .then((res) => {
        dispatch({
          type: professors.FETCH_PROFESSORS_FULLFILED,
          payload: res.data
        });
      })
      .catch((err) => {
        dispatch({
          type: professors.FETCH_PROFESSORS_REJECTED,
          payload: err
        });
      });
  };
};
