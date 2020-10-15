import React from "react";
import { Heart } from "react-feather";
import { MessageCircle } from "react-feather";
import { PenTool } from "react-feather";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { useDispatch } from "react-redux";
import { likeComment, showDangerToast } from "../../redux/actions";

export default function CommentActions({
  id,
  likes_count,
  comments_count,
}: any) {
  const isAuthenticated = useSelector(
    ({ auth }: RootState) => auth.isAuthenticated
  );

  const liked_comments: number[] = useSelector(
    ({ user }: RootState) => user.liked_comments
  );

  const dispatch = useDispatch();

  return (
    <div className="comment__actions">
      <div className="icon__content">
        <Heart
          className={
            liked_comments.indexOf(id) === -1
              ? "card__icon"
              : "card__icon liked"
          }
          onClick={() => {
            if (isAuthenticated) {
              dispatch(likeComment(id));
            } else {
              dispatch(showDangerToast("Please Login first"));
            }
          }}
        />
        {likes_count > 0 && <span>{likes_count}</span>}
      </div>
      <div className="icon__content">
        <MessageCircle
          className="card__icon"
          onClick={() => {
            // dispatch(showCommentBar(id));
            console.log("reply");
          }}
        />
        {comments_count > 0 && <span>{comments_count}</span>}
      </div>
      <PenTool className="card__icon" />
    </div>
  );
}
