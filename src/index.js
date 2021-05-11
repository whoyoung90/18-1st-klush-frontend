import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./Styles/common.scss";
import rootReducer from "./store/reducer/rootReducer";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
