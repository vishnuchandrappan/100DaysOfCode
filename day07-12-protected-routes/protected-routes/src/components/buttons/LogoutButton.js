import React from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "../../redux/actions/auth";

export default function LogoutButton() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(userLogout());
      }}
      className="logout-btn"
    >
      Logout
    </button>
  );
}
