import React from "react";
import BlogPostForm from "./BlogPostForm";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { object, string } from "yup";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#2f2f2f",
    },
    paper: {
      backgroundColor: "#2b3841",
      color: "#fff !important",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  })
);

interface NewFormProps {
  open: boolean;
  handleClose: () => void;
}

export interface NewFormValues {
  title: string;
  body: string;
  image: string;
}

export default function BlogPostFormContainer(props: NewFormProps) {
  const classes = useStyles();

  const initialValues: NewFormValues = {
    title: "",
    body: "",
    image: "",
  };

  const onSubmit = (values: NewFormValues) => {
    // dispatch create blog post
  };

  const newBlogPostValidation = object().shape({
    title: string().required("Oh its required! Yes it is"),
    body: string().required("Oh its required! Yes it is"),
  });

  return (
    <BlogPostForm
      newBlogPostValues={initialValues}
      onSubmit={onSubmit}
      newBlogPostValidation={newBlogPostValidation}
      classes={classes}
      {...props}
    />
  );
}
