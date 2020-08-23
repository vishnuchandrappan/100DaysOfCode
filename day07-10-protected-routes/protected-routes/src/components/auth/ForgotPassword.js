import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import Axios from "axios";
import { Link } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email ID").required(),
});

export const ForgotPassword = () => {
  return (
    <div className="forgot_password">
      <h1 className="heading">Forgot Password</h1>

      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          Axios.post("/", values)
            .then(({ data }) => {
              console.log("data", data);
            })
            .catch((error) => {
              console.log("[Forgot Password] ", error);
            });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <ErrorMessage name="email" component="div" />
            <Field name="email" placeholder="john@example.com" />

            <div className="btn-container">
              <button type="submit">
                {isSubmitting ? "..." : "Get OTP !"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <div className="auth__other-options">
        <div className="auth__other-option">
          <span>back to</span>
          <Link to="/auth/login">Login</Link>
        </div>
      </div>
    </div>
  );
};
