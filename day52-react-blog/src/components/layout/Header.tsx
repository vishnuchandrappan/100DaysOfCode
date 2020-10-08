import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
          {isAuthenticated ? (
            <>
              <Link to="/profile">{name}</Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link to="/auth/login">Login</Link>
              <Link to="/auth/signup">SignUp</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
