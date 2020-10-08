import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { showDangerToast } from "../../redux/actions";

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
  const isAuthenticated = useSelector(
    ({ auth }: RootState) => auth.isAuthenticated
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      dispatch(showDangerToast("Login first... You fool.. you fool"));
    }
  }, [isAuthenticated, dispatch]);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
