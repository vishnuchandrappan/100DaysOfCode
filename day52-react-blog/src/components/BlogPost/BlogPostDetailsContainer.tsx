import React, { useState, useEffect } from "react";
import BlogPostDetails from "./BlogPostDetails";
import { BlogPostsResponse } from "../../redux/_interfaces/index";
import { useSelector } from "react-redux";
import { RootState } from "typesafe-actions";
import { useHistory, useParams } from "react-router-dom";

export const BlogPostDetailsContainer = () => {
  let { blogPostId }: any = useParams();

  const history = useHistory();

  const blogPosts: BlogPostsResponse[] = useSelector(
    ({ blogPosts }: RootState) => blogPosts.blogPosts
  );

  const [post, setPost] = useState<BlogPostsResponse | undefined>(undefined);

  useEffect(() => {
    const blog_post: BlogPostsResponse | undefined = blogPosts.find(
      (item) => item.id === parseInt(blogPostId)
    );
    if (blog_post) {
      setPost(blog_post);
    } else {
      // history.push("/");
      //@todo implement loader
    }
  }, [setPost, blogPostId, blogPosts, history]);

  return <BlogPostDetails blogPost={post} />;
};

export default BlogPostDetailsContainer;
