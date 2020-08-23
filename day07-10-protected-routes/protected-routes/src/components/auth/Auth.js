import React from "react";
import AuthRoutes from "../routes/AuthRoutes";
import { useSelector } from "react-redux";
import { useLocation, Redirect } from "react-router-dom";

const Auth = ({ history }) => {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

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
          <Redirect to={from.pathname} />
        ) : (
          <AuthRoutes from={from} />
        )}
      </div>
    </div>
  );
};

export default Auth;
