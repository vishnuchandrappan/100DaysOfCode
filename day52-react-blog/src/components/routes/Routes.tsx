import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginContainer from "../../containers/auth/login/LoginContainer";
import SignupContainer from "../../containers/auth/signup/SignupContainer";
import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";
import Profile from "../../containers/pages/Profile";
import HomeContainer from "../../containers/pages/HomeContainer";
import { BlogPostDetailsContainer } from "../BlogPost/BlogPostDetailsContainer";
import NotFound from "../_shared/NotFound";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route
        exact
        path="/blog_posts/:blogPostId"
        component={BlogPostDetailsContainer}
      />
      <AuthRoute path="/auth/login" component={LoginContainer} />
      <AuthRoute path="/auth/signup" component={SignupContainer} />
      <ProtectedRoute path="/profile" component={Profile} />

      <Route component={NotFound} />
    </Switch>
  );
}
