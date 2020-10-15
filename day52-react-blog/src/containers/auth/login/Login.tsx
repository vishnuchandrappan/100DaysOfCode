import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import { LoginCredentials } from "../../../redux/_interfaces/index";
import SubmitButton from "../../../components/buttons/SubmitButton";

interface LoginProps {
  initialValues: {
    email: string;
    password: string;
  };
  loginSchema: any;
  onSubmit: (values: LoginCredentials) => void;
}

export default function Login({
  initialValues,
  loginSchema,
  onSubmit,
}: LoginProps) {
  return (
    <div className="container login">
      <h1>Login</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({ submitForm, setSubmitting, isSubmitting, resetForm }) => (
          <Form className="login__form">
            <Field
              className="form-group"
              component={TextField}
              name="email"
              type="email"
              label="Email"
              variant="outlined"
            />
            <Field
              className="form-group"
              component={TextField}
              type="password"
              label="Password"
              name="password"
              variant="outlined"
            />
            <div className="btn-container">
              <SubmitButton
                submitting={isSubmitting}
                setSubmitting={setSubmitting}
                onClick={submitForm}
                resetForm={resetForm}
              >
                Login
              </SubmitButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
