import React, { ReactElement } from "react";
import Header from "./components/layout/Header";
import Routes from "./components/routes/Routes";
import Toast from "./components/toast/Toast";
import { Persistor } from "redux-persist";

const App = (props: { persistor: Persistor }): ReactElement => (
  <div className="App">
    <Header />
    <Routes />
    <Toast />
  </div>
);

export default App;
