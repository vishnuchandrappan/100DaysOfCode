import React from "react";
import Container from "../../_shared/Container";
import Heading from "../../_shared/Heading";
import User from "./User";
import { FetchData } from "../../render-props/FetchData";

const UsersContainer = ({ users }) => {
  return (
    <Container>
      <Heading center>Users</Heading>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </Container>
  );
};

export const Users = () => {
  return (
    <FetchData
      render={(users) => <UsersContainer users={users} />}
      entity="users"
    />
  );
};

export default Users;
