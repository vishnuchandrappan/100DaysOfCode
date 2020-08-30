import React, { useReducer } from "react";
import Container from "./_shared/Container";
import Header from "./components/Header";
import Routes from "./components/Routes";

export const UserContext = React.createContext();
export const UiContext = React.createContext();

const initialUserState = {
  name: "",
  email: "",
  token: "",
  isLoggedIn: false,
};

const initialUiState = {
  isLoading: false,
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return {
        isLoggedIn: true,
        name: "John Doe",
        email: "john@example.com",
        token: "some.jwt.token",
      };

    case "USER_LOGOUT":
      return initialUserState;

    default:
      return state;
  }
};

const uiReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "RESET_LOADING":
      return { ...state, isLoading: false };

    default:
      return state;
  }
};

function App() {
  const [user, dispatchUser] = useReducer(userReducer, initialUserState);
  const [ui, dispatchUi] = useReducer(uiReducer, initialUiState);
  return (
    <Container fluid>
      <UiContext.Provider value={{ ui, dispatchUi }}>
        <UserContext.Provider value={{ user, dispatchUser }}>
          <Header />
          <Routes />
        </UserContext.Provider>
      </UiContext.Provider>
    </Container>
  );
}

export default App;
