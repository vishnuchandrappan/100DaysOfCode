import React from "react";
import { useFormik } from "formik";
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

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid Email";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Min 8 Chars. Required";
    }

    if (!values.password_confirmation) {
      errors.password_confirmation = "Required";
    } else if (values.password_confirmation !== values.password) {
      errors.password_confirmation = "Password confirmation doesn't match";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit,
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

  console.log(errors);

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
