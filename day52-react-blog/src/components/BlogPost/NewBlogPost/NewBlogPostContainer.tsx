import React, { useState } from "react";
import NewBlogPost from "./NewBlogPost";

export default function NewBlogPostContainer() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <NewBlogPost
      open={open}
      handleOpen={handleOpen}
      handleClose={handleClose}
    />
  );
}
