import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../auth/auth";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.getAuth() ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/auth/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
