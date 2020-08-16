import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../node_modules/milligram/dist/milligram.min.css";
import App from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
