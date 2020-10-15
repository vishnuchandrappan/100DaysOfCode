import { Card } from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-material-ui";
import React from "react";
import SubmitButton from "../buttons/SubmitButton";

interface Props {
  showCommentBar: boolean;
  closeCommentBar: () => void;
  initialValues: {
    comment: string;
  };
  commentSchema: any;
  onSubmit: (values: any) => void;
  comments: any[];
}
export default function CommentBar({
  showCommentBar,
  closeCommentBar,
  initialValues,
  commentSchema,
  onSubmit,
  comments,
}: Props) {
  return (
    <div
      className={
        showCommentBar ? "comment_bar comment_bar-open" : "comment_bar"
      }
    >
      <div className="comment_bar_out" onClick={closeCommentBar}></div>
      <div className="comment_bar_content">
        <div className="comment_bar_close">
          <span className="close-btn" onClick={closeCommentBar}>
            +
          </span>
        </div>
        <div className="new-comment">
          <Formik
            initialValues={initialValues}
            validationSchema={commentSchema}
            onSubmit={onSubmit}
          >
            {({ submitForm, setSubmitting, isSubmitting, resetForm }) => (
              <Form className="new-comment__form">
                <h2 className="new-comment__form-text">Add new comment</h2>
                <Field
                  className="form-group"
                  component={TextField}
                  name="comment"
                  type="text"
                  label="Comment"
                  variant="outlined"
                />
                <div className="btn-container">
                  <SubmitButton
                    submitting={isSubmitting}
                    setSubmitting={setSubmitting}
                    onClick={submitForm}
                    resetForm={resetForm}
                  >
                    Comment !
                  </SubmitButton>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="comments">
          {comments.map((comment) => (
            <Card key={comment.id}>
              <h1>{comment.comment}</h1>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
