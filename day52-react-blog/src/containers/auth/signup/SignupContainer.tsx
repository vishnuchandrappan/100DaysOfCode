import React from "react";
import Signup from "./Signup";
import { string, ref, object } from "yup";
import { useDispatch } from "react-redux";
import { signupRequest } from "../../../redux/actions/auth";

interface SignupValues {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const SignupContainer = (): JSX.Element => {
  const dispatch = useDispatch();

  const initialValues: SignupValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const signupSchema = object({
    name: string().required(),
    email: string().email("Write it right... you fool... you fool").required(),
    password: string()
      .min(8, "Minimum 8 digits required... you fool.. you fool")
      .required(),
    password_confirmation: string()
      .oneOf(
        [ref("password")],
        "I think... I think, password confirmation doesn't match"
      )
      .required(),
  });

  const onSubmit = (values: SignupValues) => {
    dispatch(signupRequest(values));
  };

  return (
    <Signup
      initialValues={initialValues}
      signupSchema={signupSchema}
      onSubmit={onSubmit}
    />
  );
};

export default SignupContainer;
