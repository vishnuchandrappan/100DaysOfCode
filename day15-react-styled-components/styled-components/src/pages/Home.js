import React from "react";
import Container from "../_shared/Container";
import Heading from "../_shared/Heading";
import styled from "styled-components";
import Button from "../_shared/Button";
import { Link } from "react-router-dom";

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

export default function Home() {
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
    </Container>
  );
}
