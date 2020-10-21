import React, { Fragment } from "react";
import Header from "./components/layout/Header";
import Routes from "./components/routes/Routes";
import "./style.css";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes />
    </Fragment>
  );
}

export default App;
