import React from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Routes from "./components/routes/Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
