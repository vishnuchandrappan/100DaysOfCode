import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import LogoutButton from "../buttons/LogoutButton";

export default function Header() {
  const isAuthenticated = useSelector(
    ({ auth }: RootState) => auth.isAuthenticated
  );
  const name = useSelector(({ user }: RootState) => user.name);
  return (
    <header>
      <nav className="nav">
        <h1 className="nav__logo">Blog</h1>
        <div className="nav__links">
          <NavLink exact to="/">
            Home
          </NavLink>
          {isAuthenticated ? (
            <>
              <NavLink to="/profile">{name}</NavLink>
              <LogoutButton />
            </>
          ) : (
            <>
              <NavLink to="/auth/login">Login</NavLink>
              <NavLink to="/auth/signup">SignUp</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
