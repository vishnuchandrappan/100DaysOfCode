import React from "react";
import { BlogPostsResponse } from "../../redux/_interfaces/index";
import { Link } from "react-router-dom";
import BlogPostActions from "./BlogPostActions";
import Tag from "./Tag";

const BlogPost = ({
  id,
  title,
  body,
  likes_count,
  user_id,
  comments_count,
  user,
  tags_list,
}: BlogPostsResponse) => {
  return (
    <div className="card post">
      <Link to={`/blog_posts/${id}`} className="post__contents">
        <span className="post__title">{title}</span>
        <Link to={`/users/${user_id}`} className="post__author">
          {user.name}
        </Link>
        <p className="post__body">
          {body.length > 340 ? `${body.slice(0, 340)}...` : body}
        </p>
        <div className="tags">
          {tags_list.map((item) => (
            <Tag key={item} value={item} />
          ))}
        </div>
      </Link>
      <BlogPostActions
        likes_count={likes_count}
        comments_count={comments_count}
        id={id}
      />
    </div>
  );
};

export default BlogPost;
