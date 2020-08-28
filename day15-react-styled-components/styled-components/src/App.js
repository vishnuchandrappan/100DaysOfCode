import React from "react";
import Container from "./_shared/Container";
import Header from "./components/Header";
import Routes from "./components/Routes";

function App() {
  return (
    <Container fluid>
      <Header />
      <Routes />
    </Container>
  );
}

export default App;
