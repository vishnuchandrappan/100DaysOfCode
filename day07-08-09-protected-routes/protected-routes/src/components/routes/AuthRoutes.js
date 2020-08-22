import React from "react";
import { Switch, useRouteMatch, Route, Redirect } from "react-router-dom";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { ForgotPassword } from "../auth/ForgotPassword";

export default function AuthRoutes() {
  let { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}`} exact>
        <Redirect to={`${path}/login`} />
      </Route>
      <Route path={`${path}/login`} component={Login} />
      <Route path={`${path}/register`} component={Register} />
      <Route path={`${path}/forgot-password`} component={ForgotPassword} />
    </Switch>
  );
}
