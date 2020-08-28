import React from "react";
import Container from "../_shared/Container";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2f2f2f;
  color: lavenderblush;
  border-radius: 4px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    text-align: center;
  }
`;

const NavLogo = styled.div`
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 1.5rem;
  text-transform: uppercase;
  flex: 1;

  @media screen and (max-width: 768px) {
    font-size: 7vw;
    margin-bottom: 10px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;

  @media screen and (max-width: 400px) {
    flex-direction: column;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: none;
`;

export default function Header() {
  return (
    <Container fluid>
      <Nav>
        <NavLogo>Styled Components</NavLogo>
        <NavLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/posts">Posts</StyledLink>
          <StyledLink to="/users">Users</StyledLink>
        </NavLinks>
      </Nav>
    </Container>
  );
}
