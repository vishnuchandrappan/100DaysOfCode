import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginContainer from "../../containers/auth/login/LoginContainer";
import SignupContainer from "../../containers/auth/signup/SignupContainer";
import Home from "../../containers/pages/Home";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/auth/login" component={LoginContainer} />
      <Route path="/auth/signup" component={SignupContainer} />
    </Switch>
  );
}
