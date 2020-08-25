import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { usersRequest } from "../../redux/actions";

export default function User() {
  let { userId } = useParams();
  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  const users = useSelector((state) => state.users);
  useEffect(() => {
    console.log(users);
    if (users.length === 0) {
      dispatch(usersRequest());
    } else {
      setUser(users.find((user) => user.id === parseInt(userId)));
    }
  }, [users.length, dispatch, userId, users, user]);

  return (
    <div className="container user__container">
      <span>User : {userId}</span>
      {
        <h2>{user.name}</h2>
      }
    </div>
  );
}
