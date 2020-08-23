import React from "react";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { ForgotPassword } from "../auth/ForgotPassword";

export default function AuthRoutes({ from }) {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} exact>
        <Login from={from} />
      </Route>
      <Route path={`${path}/login`} component={Login} />
      <Route path={`${path}/register`} component={Register} />
      <Route path={`${path}/forgot-password`} component={ForgotPassword}/>
    </Switch>
  );
}
