import { professors } from "./types";
import axios from "axios";

export const fetchProfessors = () => {
  return {
    type: professors.FETCH_PROFESSORS,
    payload: axios.get("/v2/590951c6100000130247c09e")
  };
};
