import React from "react";
import { EMAIL_REGEX } from "../login/LoginContainer";
import Signup from "./Signup";
import { useHistory } from "react-router-dom";
import { useAuth } from "reactfire";

export default function SignupContainer() {

  const auth = useAuth();
  const history = useHistory();
  const handleSubmit = async (values) => {
    try {
      await auth.createUserWithEmailAndPassword(values.email, values.password);
      history.push("/chat");
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
