import React from "react";
import { Heart } from "react-feather";
import { MessageCircle } from "react-feather";
import { PenTool } from "react-feather";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { useDispatch } from "react-redux";
import { likeBlogPost, showDangerToast } from "../../redux/actions";

export default function BlogPostActions({
  id,
  likes_count,
  comments_count,
}: any) {
  const isAuthenticated = useSelector(
    ({ auth }: RootState) => auth.isAuthenticated
  );

  const dispatch = useDispatch();

  return (
    <div className="post__actions">
      <div className="icon__content">
        <Heart
          className="card__icon"
          onClick={() => {
            if (isAuthenticated) {
              dispatch(likeBlogPost(id));
            } else {
              dispatch(showDangerToast("Please Login first"));
            }
          }}
        />
        {likes_count > 0 && <span>{likes_count}</span>}
      </div>
      <div className="icon__content">
        <MessageCircle className="card__icon" />
        {comments_count > 0 && <span>{comments_count}</span>}
      </div>
      <PenTool className="card__icon" />
    </div>
  );
}
