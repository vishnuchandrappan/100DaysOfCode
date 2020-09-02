import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

interface Values {
  email: string;
  password: string;
}

const initialValues: Values = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid Email ID").required(),
  password: Yup.string().min(8).required(),
});

const Login = () => {
  const handleSubmit = (values: Values) => {
    // handleSubmit here;
  };
  return (
    <div className="container login__container">
      <h1>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <Field name="email" type="email" />
              {touched.email && errors.email && (
                <div className="error">{errors.email}</div>
              )}
            </div>

            <div className="form-group">
              <Field name="password" type="password" />
              {touched.password && errors.password && (
                <div className="error">{errors.password}</div>
              )}
            </div>

            <div className="btn-container">
              <button type="submit">Login</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
