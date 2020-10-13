import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import { Paperclip } from "react-feather";
import BlogPostActions from "./BlogPostActions";

export const BlogPostDetails = (props: any): ReactElement => {
  if (props.blogPost) {
    const {
      title,
      body,
      likes_count,
      comments_count,
      user,
      id,
    } = props.blogPost;
    return (
      <div className="container post-details">
        <h2 className="post-details__title">
          <Paperclip /> {title}
        </h2>
        <Link to={`/users/${user.id}`} className="post-details__author">
          Created by {user.name}
        </Link>
        <p className="post-details__body">{body}</p>
        <BlogPostActions
          likes_count={likes_count}
          comments_count={comments_count}
          id={id}
        />
      </div>
    );
  } else {
    return <></>;
  }
};

export default BlogPostDetails;
