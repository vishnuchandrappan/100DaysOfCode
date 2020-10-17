import React from "react";
import { Field } from "formik";

export default function CustomField(props: any) {
  return (
    <Field
      {...props}
      className="form-group"
      variant="outlined"
    />
  );
}
