import React from "react";
import { Redirect, Route } from "react-router-dom";
import { auth } from "../../services/firebase";

export default function AuthRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth().currentUser ? (
          <Redirect to="/" />
        ) : (
          <Component {...rest} {...props} />
        )
      }
    />
  );
}
