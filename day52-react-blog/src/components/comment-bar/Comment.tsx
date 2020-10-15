import React from "react";
import { Card } from "@material-ui/core";
import CommentActions from "./CommentActions";

interface Comment {
  id: number;
  comment: string;
  likes_count: number;
  comments_count: number;
}
export default function Comment(comment: Comment) {
  return (
    <Card className="comments__card">
      <span className="comments__card-text">{comment.comment}</span>
      <CommentActions
        id={comment.id}
        likes_count={comment.likes_count}
        comments_count={comment.comments_count}
      />
    </Card>
  );
}
