import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentBar from "./CommentBar";
import { RootState } from "typesafe-actions";
import { hideCommentBar } from "../../redux/actions/ui";
import * as Yup from "yup";
import { createComment, getCommentsRequest } from "../../redux/actions";

interface State {
  ui: {
    showCommentBar: boolean;
    blogPostId: number;
  };
  comments: {
    comments: {
      comment: string;
      id: number;
    }[];
  };
}

const CommentBarContainer = () => {
  const {
    ui: { showCommentBar, blogPostId },
    comments: { comments },
  }: State = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    if (showCommentBar) {
      dispatch(getCommentsRequest());
    }
  }, [dispatch, showCommentBar]);

  const closeCommentBar = () => {
    dispatch(hideCommentBar());
  };

  const initialValues = {
    comment: "",
  };

  const commentSchema = Yup.object().shape({
    comment: Yup.string().required("Oh its required! Yes it is"),
  });

  const onSubmit = (values: any) => {
    dispatch(createComment(blogPostId, values));
  };

  return (
    <CommentBar
      showCommentBar={showCommentBar}
      closeCommentBar={closeCommentBar}
      initialValues={initialValues}
      commentSchema={commentSchema}
      onSubmit={onSubmit}
      comments={comments}
    />
  );
};

export default CommentBarContainer;
