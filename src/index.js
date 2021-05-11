import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./Styles/common.scss";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducers from "./store";

const store = createStore(rootReducers);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
