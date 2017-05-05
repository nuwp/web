import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

import App from "./App";
import reducers from "./reducers";
import "./index.css";

const store = createStore(
  reducers,
  applyMiddleware(logger, thunk, promiseMiddleware())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
