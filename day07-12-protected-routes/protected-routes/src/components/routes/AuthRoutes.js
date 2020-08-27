import React from "react";
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import { ForgotPassword } from "../auth/ForgotPassword";
import AnimatedRoute from "./AnimatedRoute";

export default function AuthRoutes({ from }) {
  return (
    <>
      <AnimatedRoute path="/auth" exact>
        <Login from={from} />
      </AnimatedRoute>
      <AnimatedRoute path="/auth/login" Component={Login} />
      <AnimatedRoute path="/auth/register" Component={Register} />
      <AnimatedRoute
        path="/auth/forgot-password"
        Component={ForgotPassword}
      />
    </>
  );
}
