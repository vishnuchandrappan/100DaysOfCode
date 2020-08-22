import React from "react";
import AuthRoutes from "../routes/AuthRoutes";
import { useSelector } from "react-redux";
import LogoutButton from "../buttons/LogoutButton";

const Auth = ({ history }) => {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  console.log(history);
  return (
    <div className="container auth__container row">
      <div className="column auth__left-column">
        <div className="full-content">
          <h1>Protected Routes</h1>
          <p>This is a sample project.</p>
        </div>
      </div>
      <div className="column auth__right-column">
        {isAuthenticated ? (
          <div className="full-content">
            <LogoutButton />
          </div>
        ) : (
          <AuthRoutes />
        )}
      </div>
    </div>
  );
};

export default Auth;
