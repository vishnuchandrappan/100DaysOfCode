import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";

const AuthRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = useSelector(
    ({ auth }: RootState) => auth.isAuthenticated
  );

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default AuthRoute;
