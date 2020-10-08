import React from "react";
import { Link } from "react-router-dom";
import { PenTool, Paperclip } from "react-feather";
import BlogPostActions from "./BlogPostActions";
import { useSelector } from "react-redux";
import { BlogPostsResponse } from "../../redux/_interfaces/index";
import { RootState } from "typesafe-actions";

export default function BlogPostDetails() {
  const {
    title,
    body,
    likes_count,
    comments_count,
    user: { name, id },
  }: BlogPostsResponse = useSelector(({ blogPosts }: RootState) =>
    blogPosts.blogPosts.find((item: BlogPostsResponse) => item.id === 1)
  );

  return (
    <div className="container post-details">
      <h2 className="post-details__title">
        <Paperclip /> {title}
      </h2>
      <Link to={`/users/${id}`}>
        <PenTool /> Created by {name}
      </Link>
      <p className="post-details__body">{body}</p>
      <BlogPostActions
        likes_count={likes_count}
        comments_count={comments_count}
      />
    </div>
  );
}
