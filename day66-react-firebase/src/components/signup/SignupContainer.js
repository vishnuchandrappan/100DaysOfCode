import React from "react";
import { EMAIL_REGEX } from "../login/LoginContainer";
import { signup } from "../../helpers/auth";
import Signup from "./Signup";

export default function SignupContainer() {
  const handleSubmit = async (values) => {
    try {
      await signup(values.email, values.password);
    } catch (error) {
      console.log("error");
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (values) => {
    let errors = {};

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!EMAIL_REGEX.test(values.email)) {
      errors.email = "Invalid email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Minimum 8 characters required";
    }

    return errors;
  };
  return (
    <Signup
      handleSubmit={handleSubmit}
      initialValues={initialValues}
      validate={validate}
    />
  );
}
