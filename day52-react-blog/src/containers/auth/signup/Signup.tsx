import { Formik, Form, Field } from "formik";
import React from "react";
import { TextField } from "formik-material-ui";
import SubmitButton from "../../../components/buttons/SubmitButton";

interface SignupProps {
  initialValues: {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
  };
  signupSchema: any;
  onSubmit: (values: any) => void;
}

export default function Signup({
  initialValues,
  signupSchema,
  onSubmit,
}: SignupProps): JSX.Element {
  return (
    <div className="container signup">
      <h1>Signup</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={signupSchema}
        onSubmit={onSubmit}
      >
        {({ submitForm, setSubmitting, isSubmitting, resetForm }) => (
          <Form className="signup__form">
            <Field
              className="form-group"
              component={TextField}
              name="name"
              type="text"
              label="Name"
              variant="outlined"
            />
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
            <Field
              className="form-group"
              component={TextField}
              type="password"
              label="Password Confirmation"
              name="password_confirmation"
              variant="outlined"
            />
            <div className="btn-container">
              <SubmitButton
                submitting={isSubmitting}
                setSubmitting={setSubmitting}
                onClick={submitForm}
                resetForm={resetForm}
              >
                Signup
              </SubmitButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
