import React from "react";
import { CircularProgress } from "@material-ui/core";
import BlogPost from "../../components/BlogPost/BlogPost";
import NewBlogPost from "../../components/BlogPost/NewBlogPost";

interface BlogPostProps {
  blogPosts: any[];
  isFetching: boolean;
}

export default function Home({ blogPosts, isFetching }: BlogPostProps) {
  return (
    <>
      <NewBlogPost />
      <div className="container home">
        {blogPosts.map((item) => (
          <BlogPost {...item} key={item.id} />
        ))}
        {(blogPosts.length === 0 && isFetching) && (
          <div className="full-page">
            <CircularProgress size={40} />
          </div>
        )}
      </div>
    </>
  );
}
