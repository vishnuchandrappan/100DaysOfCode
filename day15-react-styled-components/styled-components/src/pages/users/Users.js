import React, { useState, useEffect } from "react";
import Container from "../../_shared/Container";
import Heading from "../../_shared/Heading";
import Axios from "axios";
import User from "./User";
import styled from "styled-components";

const Loading = styled.div`
  border-radius: 50%;
  color: #ffffff;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  &:before,
  &:after {
    position: absolute;
    content: "";
    border-radius: 50%;
  }
  &:before {
    width: 5.2em;
    height: 10.2em;
    background: #2f2f2f;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.1em 5.1em;
    transform-origin: 5.1em 5.1em;
    -webkit-animation: load2 2s infinite ease 1.5s;
    animation: load2 2s infinite ease 1.5s;
  }
  &:after {
    width: 5.2em;
    height: 10.2em;
    background: #2f2f2f;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 4.9em;
    -webkit-transform-origin: 0.1em 5.1em;
    transform-origin: 0.1em 5.1em;
    -webkit-animation: load2 2s infinite ease;
    animation: load2 2s infinite ease;
  }
  @-webkit-keyframes load2 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load2 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((error) => {
        alert(error.toString());
      });
  };

  return (
    <Container>
      <Heading center>Users</Heading>
      {users.length > 0 ? (
        users.map((user) => <User key={user.id} user={user} />)
      ) : (
        <Loading />
      )}
    </Container>
  );
}
