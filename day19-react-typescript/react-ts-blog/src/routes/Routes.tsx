import React from "react";
import { Switch, Route } from "react-router-dom";
import { Register } from "../containers/auth/Register";
import { Login } from "../containers/auth/Login";
import { Home } from "../containers/pages/Home";
import { ProtectedRoute } from "./ProtectedRoute";

const routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <ProtectedRoute path="/dashboard" component={Home} />
    </Switch>
  );
};

export default routes;
