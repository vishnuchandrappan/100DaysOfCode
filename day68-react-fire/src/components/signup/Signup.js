import React from "react";
import { Formik } from "formik";

export default function Signup({ initialValues, validate, handleSubmit }) {
  return (
    <div className="container">
      <h1>Signup</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        {({
          isSubmitting,
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              {errors.email && touched.email && (
                <span className="error-msg">{errors.email}</span>
              )}
              <input
                type="text"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              {errors.password && touched.password && (
                <span className="error-msg">{errors.password}</span>
              )}
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className="btn-container">
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "..." : "Signup"}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}
