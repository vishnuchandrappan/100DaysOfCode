import React from "react";
import { Card } from "@material-ui/core";
import CommentActions from "./CommentActions";

interface Comment {
  id: number;
  comment: string;
  likes_count: number;
  comments_count: number;
}
export default function Comment({
  id,
  comment,
  likes_count,
  comments_count,
}: Comment) {
  return (
    <Card className="comments__card">
      <span className="comments__card-text">{comment}</span>
      <CommentActions
        id={id}
        likes_count={likes_count}
        comments_count={comments_count}
      />
    </Card>
  );
}
