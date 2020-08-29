import React from "react";
import Container from "./_shared/Container";
import Header from "./components/Header";
import Routes from "./components/Routes";

export const UserContext = React.createContext();
export const UiContext = React.createContext();

function App() {
  return (
    <Container fluid>
      <UiContext.Provider
        value={{
          isLoading: false,
        }}
      >
        <UserContext.Provider
          value={{
            isLoggedIn: true,
            name: "John Doe",
            email: "john@example.com",
            token: "3asij3.ajda3.asd3d",
          }}
        >
          <Header />
          <Routes />
        </UserContext.Provider>
      </UiContext.Provider>
    </Container>
  );
}

export default App;
