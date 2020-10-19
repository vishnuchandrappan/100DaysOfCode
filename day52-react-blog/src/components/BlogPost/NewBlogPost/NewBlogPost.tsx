import React from "react";
import { PlusCircle } from "react-feather";
import BlogPostFormContainer from "./BlogPostForm/BlogPostFormContainer";

interface NewBlogProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  setCreate: (value: boolean) => void;
}

const NewBlogPost = (props: NewBlogProps) => {
  return (
    <>
      <div className="new__post">
        <PlusCircle onClick={props.handleOpen} />
      </div>
      <BlogPostFormContainer {...props} />
    </>
  );
};

export default NewBlogPost;
