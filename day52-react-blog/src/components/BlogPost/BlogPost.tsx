import React from "react";
import { BlogPostsResponse } from "../../redux/_interfaces/index";
import { Link } from "react-router-dom";
import BlogPostActions from "./BlogPostActions";

const BlogPost = ({
  id,
  title,
  body,
  likes_count,
  comments_count,
}: BlogPostsResponse) => {
  return (
    <div className="card post">
      <Link to={`/blog_posts/${id}`} className="post__contents">
        <span className="post__title">{title}</span>
        <p className="post__body">{body}</p>
      </Link>
      <BlogPostActions
        likes_count={likes_count}
        comments_count={comments_count}
      />
    </div>
  );
};

export default BlogPost;
