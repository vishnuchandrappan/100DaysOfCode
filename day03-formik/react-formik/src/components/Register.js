import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
export const Register = () => {
  const onSubmit = (values) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      resetForm();
    }, 2000);
  };

  const initialValues = {
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
      .oneOf([Yup.ref("password")], "Password Confirmation doesn't match").required(),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const {
    values,
    handleChange,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    setSubmitting,
    resetForm,
    touched,
    handleBlur,
  } = formik;

  return (
    <div className="form register__form">
      <h1>Create New Account</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        {errors.name && touched.name ? (
          <span className="alert-danger">{errors.name}</span>
        ) : (
          ""
        )}
        <input
          type="text"
          name="name"
          className="form-control"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          id="name"
        />

        <label htmlFor="email">Email</label>
        {errors.email && touched.email ? (
          <span className="alert-danger">{errors.email}</span>
        ) : (
          ""
        )}
        <input
          type="text"
          name="email"
          className="form-control"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          id="email"
        />

        <label htmlFor="password">Password</label>
        {errors.password && touched.password ? (
          <span className="alert-danger">{errors.password}</span>
        ) : (
          ""
        )}
        <input
          type="password"
          name="password"
          className="form-control"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password"
        />

        <label htmlFor="password_confirmation">Password</label>
        {errors.password_confirmation && touched.password_confirmation ? (
          <span className="alert-danger">{errors.password_confirmation}</span>
        ) : (
          ""
        )}
        <input
          type="password"
          name="password_confirmation"
          className="form-control"
          value={values.password_confirmation}
          onChange={handleChange}
          onBlur={handleBlur}
          id="password_confirmation"
        />

        <div className="btn-container">
          <button type="submit" disabled={!isValid}>
            {!isSubmitting ? "Register" : "..."}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
