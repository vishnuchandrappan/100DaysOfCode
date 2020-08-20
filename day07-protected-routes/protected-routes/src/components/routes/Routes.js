import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../auth/Login";
import ProtectedRoute from "./ProtectedRoute";
import Users from "../private/Users";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/auth/login" component={Login} />

      {
        // protected routes
      }
      <ProtectedRoute path="/users" component={Users} />

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
