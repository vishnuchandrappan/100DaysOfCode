import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Posts from "../pages/posts/Posts";
import Users from "../pages/users/Users";
import Todos from '../pages/todos/Todos';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/posts" component={Posts} />
    <Route path="/users" component={Users} />
    <Route path="/todos" component={Todos} />
  </Switch>
);

export default Routes;
