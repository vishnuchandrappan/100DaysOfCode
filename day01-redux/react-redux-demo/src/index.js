import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import CakeContainer from "./components/CakeContainer";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <h1>Cake App</h1>
    <CakeContainer />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
