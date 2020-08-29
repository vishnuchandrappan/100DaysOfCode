import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { UserContext } from "../../App";

const UserCard = styled.div`
  padding: 20px;
  margin: 20px 0;
  border-radius: 27px;
  border: solid 4px;
  border-color: #dadada;
`;

const Name = styled.h1`
  color: #2f2f2f;
  font-size: larger;
  text-align: center;
  padding: 5px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  text-transform: capitalize;
`;

const Email = styled.p`
  text-align: center;
`;

const Username = styled.span`
  font-style: italic;
  font-size: smaller;
  font-weight: normal;
  padding-left: 20px;

  &:before {
    content: "@";
  }

  ${(props) =>
    props.without &&
    css`
      &:before {
        content: "";
      }
    `};
`;

export default function User({ user }) {
  const data = useContext(UserContext);
  return (
    <UserCard>
      <Name>
        {user.name}
        <Username>{user.username}</Username>
      </Name>
      <Email>{user.email}</Email>
      <small>Created By: {data.name}</small>
      <Username without>{data.email}</Username>
    </UserCard>
  );
}
