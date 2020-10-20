import React from "react";
import { Route, Switch } from "react-router-dom";
import Chat from "../Chat";
import Home from "../Home";
import ProtectedRoute from "./ProtectedRoute";
import LoginContainer from "../login/LoginContainer";
import SignupContainer from "../signup/SignupContainer";

export default function Routes() {
  return (
    <Switch>
      <Route path="/login" component={LoginContainer} />
      <Route path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/" exact component={Home} />
      <ProtectedRoute path="/chat" component={Chat} />
    </Switch>
  );
}
