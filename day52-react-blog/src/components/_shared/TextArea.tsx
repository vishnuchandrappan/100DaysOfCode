import React from "react";
import { TextField } from 'formik-material-ui';

export default function TextArea(props: any) {
  return <TextField {...props} multiline variant="outlined" />;
}
