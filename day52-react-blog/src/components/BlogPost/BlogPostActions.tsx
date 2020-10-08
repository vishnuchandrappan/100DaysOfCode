import React from "react";
import { Heart } from "react-feather";
import { MessageCircle } from "react-feather";
import { PenTool } from "react-feather";

export default function BlogPostActions({ likes_count, comments_count }: any) {
  return (
    <div className="post__actions">
      <div className="icon__content">
        <Heart className="card__icon" />
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
