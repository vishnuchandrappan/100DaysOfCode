import React from "react";
import styled from "styled-components";

const UserCard = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 4px 4px 10px #2f2f2f6c;
`;

const Name = styled.span`
  color: #2f2f2f;
`;

const Email = styled.span`
  font-weight: normal;
`;

const Username = styled.span`
  font-size: smaller;
  padding-left: 10px;
  font-style: italic;
  font-weight: normal;

  &:before {
    content: "@";
  }
`;

export default function User({ user }) {
  return (
    <UserCard>
      <h3>
        <Name>{user.name}</Name>
        <Username>{user.username}</Username>
      </h3>
      <Email>{user.email}</Email>
    </UserCard>
  );
}
