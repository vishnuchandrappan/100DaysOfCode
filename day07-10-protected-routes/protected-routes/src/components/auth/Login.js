import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/actions/auth";
import axios from "axios";
import { setSubmitting, resetSubmitting } from "../../redux/actions/ui";

export const Login = ({ from }) => {
  const dispatch = useDispatch();
  const isSubmitting = useSelector(({ ui }) => ui.isSubmitting);
  return (
    <div className="login">
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
        onSubmit={(values) => {
          dispatch(setSubmitting());
          axios
            .post("https://reqres.in/api/login", values)
            .then(({ data }) => {
              dispatch(updateUser(data.token));
              dispatch(resetSubmitting());
            })
            .catch((error) => {
              console.log("[Login.js] Error", error);
              dispatch(resetSubmitting());
            });
        }}
      >
        {() => (
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
      <div className="auth__other-options">
        <div className="auth__other-option">
          <span>Forgot Password ?</span>
          <Link to="/auth/forgot-password">Reset Here</Link>
        </div>
        <div className="auth__other-option">
          <span>Don't have an account ?</span>
          <Link to="/auth/register">Create Now</Link>
        </div>
      </div>
    </div>
  );
};
