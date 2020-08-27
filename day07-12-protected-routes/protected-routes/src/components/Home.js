import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { userLogout } from "../redux/actions/auth";
import { useSelector, useDispatch } from "react-redux";
import styled, {css} from "styled-components";

const Paragraph = styled.p`
  padding: 4em;
  border-radius: 4px;
  background: ${(props) => (props.primary ? "palevioletred" : "papayawhip")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  ${(props) =>
    props.primary &&
    css`
      font-weight: bold;
    `}

  ${(props) =>
    props.secondary &&
    css`
      background: lavenderblush;
      color: crimson;
      font-weight: bold;
      text-transform: uppercase;
    `}
`;


export default function Home() {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const dispatch = useDispatch();
  return (
    <div className="container home__container">
      <h1 className="heading home__heading">100DaysOfCode</h1>
      <p>This is a sample project made while learning Protected routes.</p>
      <p>
        <code>/users</code> route is protected and{" "}
        <code>home, about, contact</code> routes are public
      </p>

      <div className="container">
        <div className="btn-container">
          {!isAuthenticated ? (
            <Link className="button" to="/auth/login">
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                dispatch(userLogout());
              }}
            >
              Logout
            </button>
          )}

          {isAuthenticated && (
            <div className="btn-container">
              <Link to="/users" className="button">
                Users List
              </Link>
              <Link to="/users/1" className="button">
                User 1
              </Link>
            </div>
          )}
        </div>
      </div>

      <Paragraph>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        tempora nisi dolorem aut magnam blanditiis aliquam beatae quasi
        repellat, distinctio iure libero, eum dicta voluptatum itaque eius,
        perspiciatis error autem?
      </Paragraph>

      <Paragraph primary>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        tempora nisi dolorem aut magnam blanditiis aliquam beatae quasi
        repellat, distinctio iure libero, eum dicta voluptatum itaque eius,
        perspiciatis error autem?
      </Paragraph>

      <Paragraph secondary>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        tempora nisi dolorem aut magnam blanditiis aliquam beatae quasi
        repellat, distinctio iure libero, eum dicta voluptatum itaque eius,
        perspiciatis error autem?
      </Paragraph>
    </div>
  );
}
