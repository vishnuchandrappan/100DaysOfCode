import React from "react";
import BlogPostForm from "./BlogPostForm";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { object, string } from "yup";
import { BlogPostValues } from "../../../../redux/_interfaces";
import { useDispatch } from "react-redux";
import { createBlogPost } from "../../../../redux/actions";

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

export default function BlogPostFormContainer(props: NewFormProps) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const initialValues: BlogPostValues = {
    title: "",
    body: "",
    image: "",
  };

  const onSubmit = (values: BlogPostValues) => {
    dispatch(createBlogPost(values));
  };

  const newBlogPostValidation = object().shape({
    title: string().required("Oh its required! Yes it is"),
    image: string().url("This is not a link.. You fool... you fool"),
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
