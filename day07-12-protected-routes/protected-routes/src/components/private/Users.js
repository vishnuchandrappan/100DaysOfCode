import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usersRequest } from "../../redux/actions";

export default function Users() {
  const users = useSelector(({ users }) => users);
  const dispatch = useDispatch();
  useEffect(() => {
    if (users.length === 0) {
      dispatch(usersRequest());
    }
  }, [dispatch, users.length]);

  return (
    <div className="container users_container">
      <h1>Users List</h1> <hr />
      <div>
        {users.length !== 0 && users.map((item) => (
          <h3 key={item.id}>{item.name}</h3>
        ))}
      </div>
    </div>
  );
}
