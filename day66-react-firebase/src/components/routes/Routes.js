import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import ProtectedRoute from "./ProtectedRoute";
import LoginContainer from "../login/LoginContainer";
import SignupContainer from "../signup/SignupContainer";
import ChatContainer from "../chat/ChatContainer";
import AuthRoute from "./AuthRoutes";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <AuthRoute path="/login" component={LoginContainer} />
      <AuthRoute path="/signup" component={SignupContainer} />
      <ProtectedRoute path="/chat" component={ChatContainer} />
    </Switch>
  );
}
