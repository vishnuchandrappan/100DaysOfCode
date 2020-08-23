import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { updateUser } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email("Invalid Email ID").required(),
  phone: Yup.number("Phone number must be a number")
    .required()
    .test(
      "len",
      "Must be exactly 10 characters",
      (val) => val.toString().length === 10
    ),
  password: Yup.string().min(8).required(),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Password Confirmation doesn't match")
    .required(),
});
export const Register = () => {
  const dispatch = useDispatch();
  return (
    <div className="register">
      <h1 className="heading">Create New Account</h1>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
          password_confirmation: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post("https://reqres.in/api/register", values)
            .then(({ data }) => {
              dispatch(updateUser(data.token));
              setSubmitting(false);
            })
            .catch((error) => {
              console.log("[Register.js] Error", error);
              setSubmitting(false);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form register__form">
            <ErrorMessage name="name" component="div" />
            <Field name="name" placeholder="John Doe..." />

            <ErrorMessage name="email" component="div" />
            <Field name="email" placeholder="john@example.com..." />

            <ErrorMessage name="phone" component="div" />
            <Field name="phone" placeholder="your phone number..." />

            <ErrorMessage name="password" component="div" />
            <Field
              name="password"
              type="password"
              placeholder="your password"
            />

            <ErrorMessage name="password_confirmation" component="div" />
            <Field
              name="password_confirmation"
              type="password"
              placeholder="retype your password"
            />

            <div className="btn-container">
              <button type="submit">{isSubmitting ? "..." : "Register"}</button>
            </div>
          </Form>
        )}
      </Formik>

      <div className="auth__other-options">
        <div className="auth__other-option">
          <span>Already have an account ?</span>
          <Link to="/auth/login">Login here</Link>
        </div>
      </div>
    </div>
  );
};
