import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import auth from "./auth/auth";

export default function Home() {
  return (
    <div className="container home__container">
      <h1 className="heading home__heading">100DaysOfCode</h1>
      <p>This is a sample project made while learning Protected routes.</p>
      <p>
        <code>/users</code> route is protected and{" "}
        <code>home, about, contact</code> routes are public
      </p>

      <div className="container">
        <div className="btn-container">
          {console.log(auth.isAuthenticated)}
          {!auth.getAuth() ? (
            <Link className="button" to="/auth/login">
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                auth.logOut();
              }}
            >
              Logout
            </button>
          )}

          {auth.getAuth() && (
            <div className="btn-container">
              <Link to="/users" className="button">
                Users List
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
