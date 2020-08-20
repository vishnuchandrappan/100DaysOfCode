import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import auth from "./auth";
import { Redirect } from "react-router-dom";

export default function Login({ history }) {
  return (
    <div className="container login__container">
      {auth.getAuth() ? <Redirect to="/" /> : ""}
      <h1 className="heading">Login</h1>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          }

          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 8) {
            errors.password = "Min 8 characters required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            auth.logIn();
            setSubmitting(false);
            history.push("/");
          }, 2000);
        }}
      >
        {({ errors, touched, values, isSubmitting }) => (
          <Form className="form login__form">
            <ErrorMessage name="email" component="div" />
            <Field name="email" placeholder="john@example.com" />

            <ErrorMessage name="password" component="div" />
            <Field
              name="password"
              type="password"
              placeholder="your password"
            />

            <div className="btn-container">
              <button type="submit">{isSubmitting ? "..." : "Login"}</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
