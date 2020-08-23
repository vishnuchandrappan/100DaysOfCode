import React from "react";
import Routes from "./components/routes/Routes";
import Header from "./components/header/Header";
import Loading from "./components/shared/Loading";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Loading />
    </div>
  );
}

export default App;
