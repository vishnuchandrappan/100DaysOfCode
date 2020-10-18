import React from "react";
import { Card } from "@material-ui/core";
import CommentActions from "./CommentActions";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { Trash, Edit } from "react-feather";

interface Comment {
  id: number;
  comment: string;
  likes_count: number;
  comments_count: number;
  user_id: number;
}
export default function Comment({
  id,
  comment,
  likes_count,
  user_id,
  comments_count,
}: Comment) {
  const auth_user_id = useSelector(({ user }: RootState) => user.id);
  return (
    <Card className="comments__card">
      <span className="comments__card-text">{comment}</span>
      {auth_user_id === user_id ? (
        <>
          <span className="comments__card-delete">
            <Trash stroke-width="0.5" size={16} />
          </span>
          <span className="comments__card-edit">
            <Edit stroke-width="0.5" size={16} />
          </span>
        </>
      ) : (
        ""
      )}
      <CommentActions
        id={id}
        likes_count={likes_count}
        comments_count={comments_count}
      />
    </Card>
  );
}
