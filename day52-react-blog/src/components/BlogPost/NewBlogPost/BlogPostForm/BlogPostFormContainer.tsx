import React, { useReducer } from "react";
import BlogPostForm from "./BlogPostForm";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { object, string } from "yup";
import { Action, BlogPostValues } from "../../../../redux/_interfaces";
import { useDispatch, useSelector } from "react-redux";
import { createBlogPost } from "../../../../redux/actions";
import { RootState } from "typesafe-actions";

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

interface TagValues {
  id: number;
  name: string;
}

interface NewFormProps {
  open: boolean;
  handleClose: () => void;
  setCreate: (value: boolean) => void;
}

function reducer(state: number[], action: Action): number[] {
  switch (action.type) {
    case "APPEND_TAG":
      return [...state, action.payload];
    case "REMOVE_TAG":
      return state.filter((selectedTag) => selectedTag !== action.payload);
    default:
      throw new Error();
  }
}

export default function BlogPostFormContainer(props: NewFormProps) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [selectedTags, dispatchTag] = useReducer(reducer, []);

  const tags: TagValues[] = useSelector(({ tags }: RootState) => tags.tags);

  const initialValues = {
    title: "",
    body: "",
    image: "",
  };

  const onSubmit = (values: BlogPostValues) => {
    dispatch(createBlogPost({ ...values, tags: selectedTags }));
    props.setCreate(true);
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
      dispatchTag={dispatchTag}
      selectedTags={selectedTags}
      tags={tags}
      {...props}
    />
  );
}
