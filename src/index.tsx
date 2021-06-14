import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./router";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
