import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  let { userID } = useParams();
  return (
    <div className="container user__container">
      <h1>User</h1>
      <span>User : {userID}</span>
    </div>
  );
}
