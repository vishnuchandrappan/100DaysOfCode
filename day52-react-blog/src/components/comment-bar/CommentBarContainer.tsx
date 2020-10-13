import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentBar from "./CommentBar";
import { RootState } from "typesafe-actions";
import { hideCommentBar } from "../../redux/actions/ui";
import * as Yup from "yup";

const CommentBarContainer = () => {
  const showCommentBar = useSelector(({ ui }: RootState) => ui.showCommentBar);

  const dispatch = useDispatch();

  const closeCommentBar = () => {
    dispatch(hideCommentBar());
  };

  const initialValues = {
    comment: "",
  };

  const commentSchema = Yup.object().shape({
    email: Yup.string().required("Oh its required! Yes it is"),
  });

  const onSubmit = (values: any) => {
    console.log("comment!!!", values);
  };

  return (
    <CommentBar
      showCommentBar={showCommentBar}
      closeCommentBar={closeCommentBar}
      initialValues={initialValues}
      commentSchema={commentSchema}
      onSubmit={onSubmit}
    />
  );
};

export default CommentBarContainer;
