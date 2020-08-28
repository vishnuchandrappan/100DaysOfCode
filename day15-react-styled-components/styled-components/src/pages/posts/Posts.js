import React, { useState } from "react";
import Container from "../../_shared/Container";
import Heading from "../../_shared/Heading";
import Axios from "axios";
import Post from "./Post";
import Button from "../../_shared/Button";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  const fetchPosts = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(({ data }) => {
        setPosts(data);
      })
      .catch((error) => {
        alert(error.toString());
      });
  };

  return (
    <Container>
      <Heading center>Posts</Heading>
      {posts.length > 0 ? (
        posts.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <Button
          onClick={() => {
            fetchPosts();
          }}
        >
          Fetch Posts
        </Button>
      )}
    </Container>
  );
}
