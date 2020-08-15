import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "milligram/dist/milligram.min.css";
import "./assets/index.css";

import App from "./components/App";
import { store } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
