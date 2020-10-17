import React from "react";
import { TextField } from "@material-ui/core";

export default function TextArea(props: any) {
  return <TextField {...props} multiline variant="outlined" />;
}
