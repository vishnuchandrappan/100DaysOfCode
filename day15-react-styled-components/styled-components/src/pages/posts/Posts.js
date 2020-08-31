import React from "react";
import Container from "../../_shared/Container";
import Heading from "../../_shared/Heading";
import Post from "./Post";
import { FetchData } from "../../render-props/FetchData";

const PostsContainer = ({ posts }) => {
  return (
    <Container>
      <Heading center>Posts</Heading>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </Container>
  );
};

export const Posts = () => {
  return (
    <FetchData
      render={(posts) => <PostsContainer posts={posts} />}
      entity="posts"
    />
  );
};

export default Posts;
