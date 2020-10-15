import React from "react";
import Login from "./Login";
import { LoginCredentials } from "../../../redux/_interfaces/index";
import { object, string } from "yup";
import { useDispatch } from "react-redux";
import { loginRequest } from "../../../redux/actions";

const LoginContainer = () => {
  const dispatch = useDispatch();

  const initialValues: LoginCredentials = {
    email: "john@example.com",
    password: "password",
  };

  const loginSchema = object().shape({
    email: string()
      .email("Seriously! Are you sure this is the correct one ?")
      .required("Oh its required! Yes it is"),
    password: string()
      .min(
        8,
        "Passwords will be at least 8 characters long. You fool... You fool..."
      )
      .required("Oh its required! Yes it is"),
  });

  const onSubmit = (values: LoginCredentials) => {
    dispatch(loginRequest(values));
  };

  return (
    <Login
      initialValues={initialValues}
      loginSchema={loginSchema}
      onSubmit={onSubmit}
    />
  );
};

export default LoginContainer;
