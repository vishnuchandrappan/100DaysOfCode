import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import ProtectedRoute from "./ProtectedRoute";
import Users from "../private/Users";
import User from "../private/User";
import Auth from "../auth/Auth";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/auth" component={Auth}/>

      {
        // protected routes
      }
      <ProtectedRoute path="/users" exact component={Users} />
      <ProtectedRoute path="/users/:userId" component={User}/>

      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
