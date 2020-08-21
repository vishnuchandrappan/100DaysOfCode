import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import auth from "./auth";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../../redux/actions/auth";
import axios from "axios";

export default function Login({ history }) {
  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
  const dispatch = useDispatch();
  return isAuthenticated ? (
    <Redirect to="/" />
  ) : (
    <div className="container login__container">
      {auth.getAuth() ? <Redirect to="/" /> : ""}
      <h1 className="heading">Login</h1>

      <Formik
        initialValues={{
          email: "eve.holt@reqres.in",
          password: "cityslicka",
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
          axios
            .post("https://reqres.in/api/login", values)
            .then(({ data }) => {
              dispatch(updateUser(data.token));
              setSubmitting(false);
              history.push("/");
            })
            .catch((error) => {
              console.log("[Login Error]", error);
              setSubmitting(false);
            });
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
