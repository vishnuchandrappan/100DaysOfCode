import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { LoginCredentials } from "../../../redux/_interfaces/index";
import { loginRequest } from "../../../redux/actions";
import SubmitButton from "../../../components/buttons/SubmitButton";

const initialValues: LoginCredentials = {
  email: "john@example.com",
  password: "password",
};

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Seriously! Are you sure this is the correct one ?")
    .required("Oh its required! Yes it is"),
  password: Yup.string()
    .min(
      8,
      "Passwords will be at least 8 characters long. You fool... You fool..."
    )
    .required("Oh its required! Yes it is"),
});

export default function Login() {
  const dispatch = useDispatch();

  return (
    <div className="container login">
      <h1>Login</h1>

      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={(values: LoginCredentials) => {
          dispatch(loginRequest(values));
        }}
      >
        {({ submitForm, setSubmitting, isSubmitting }) => (
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
