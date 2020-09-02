import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions";

interface Values {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const initialValues: Values = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email("Invalid Email ID").required(),
  password: Yup.string().min(8).required(),
  password_confirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Password Confirmation doesn't match")
    .required(),
});

const Register = () => {
  const dispatch = useDispatch();
  const handleSubmit = ({ name, email, password }: Values) => {
    dispatch(
      createUser({
        name,
        email,
        password,
      })
    );
  };
  return (
    <div className="container login__container">
      <h1>Create New Account</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              {touched.name && errors.name && (
                <div className="error">{errors.name}</div>
              )}
              <Field name="name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              {touched.email && errors.email && (
                <div className="error">{errors.email}</div>
              )}
              <Field name="email" type="email" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              {touched.password && errors.password && (
                <div className="error">{errors.password}</div>
              )}
              <Field name="password" type="password" />
            </div>

            <div className="form-group">
              <label htmlFor="password_confirmation">Confirm Password</label>
              {touched.password_confirmation &&
                errors.password_confirmation && (
                  <div className="error">{errors.password_confirmation}</div>
                )}
              <Field name="password_confirmation" type="password" />
            </div>

            <div className="btn-container">
              <button type="submit">Create Account</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
