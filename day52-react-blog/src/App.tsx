import React, { FC } from "react";
import Header from "./components/layout/Header";
import Routes from "./components/routes/Routes";
import Toast from "./components/toast/Toast";

const App: FC = () => (
  <div className="App">
    <Header />
    <Routes />
    <Toast />
  </div>
);

export default App;
