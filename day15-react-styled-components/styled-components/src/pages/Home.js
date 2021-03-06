import React, { useReducer, useState, useContext } from "react";
import Container from "../_shared/Container";
import Heading from "../_shared/Heading";
import styled from "styled-components";
import Button from "../_shared/Button";
import DocTitle from "../components/DocTitle";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

const BtnContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: none;
`;

const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    case "UPDATE":
      return state + parseInt(action.payload);
    default:
      return state;
  }
};

export default function Home() {
  const [num, setNum] = useState(0);
  const [count, dispatch] = useReducer(reducer, initialState);
  const { user } = useContext(UserContext);
  return (
    <Container>
      <Heading center>Home</Heading>
      <BtnContainer>
        <Button>
          <StyledLink to="/posts">Posts</StyledLink>
        </Button>
        <Button primary>
          <StyledLink to="/users">Users</StyledLink>
        </Button>
      </BtnContainer>

      {user.isLoggedIn && (
        <Container fluid primary>
          <Heading>Welcome {user.name}</Heading>
        </Container>
      )}

      {user.isLoggedIn ? (
        <Container fluid primary>
          <Heading center>Count : {count}</Heading>
          <BtnContainer>
            <Button onClick={() => dispatch({ type: "DECREMENT" })}>
              Decrement
            </Button>
            <Button onClick={() => dispatch({ type: "INCREMENT" })}>
              Increment
            </Button>
            <Button onClick={() => dispatch({ type: "RESET" })}>Reset</Button>
          </BtnContainer>
          <BtnContainer>
            <input
              type="text"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />
            <Button
              primary
              onClick={() => {
                dispatch({ type: "UPDATE", payload: num });
                setNum(0);
              }}
            >
              Update !
            </Button>
          </BtnContainer>
        </Container>
      ) : (
        <h1>Login to continue</h1>
      )}

      <DocTitle />
    </Container>
  );
}
