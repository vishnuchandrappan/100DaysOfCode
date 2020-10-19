import React, { useEffect, useState } from "react";
import NewBlogPost from "./NewBlogPost";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";

export default function NewBlogPostContainer() {
  const [open, setOpen] = useState(false);
  const [create, setCreate] = useState(false);

  const submitting: boolean = useSelector(({ ui }: RootState) => ui.submitting);

  useEffect(() => {
    if (create && !submitting) {
      setOpen(false);
    }
  }, [submitting, setOpen, create]);

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
      setCreate={setCreate}
    />
  );
}
