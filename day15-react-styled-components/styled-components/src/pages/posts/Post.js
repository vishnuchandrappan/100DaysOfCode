import React from "react";
import styled from "styled-components";

const PostBody = styled.div`
  padding: 20px;
  margin: 20px 0;
  border-radius: 27px;
  border: solid 4px;
  border-color: #dadada;
`;

const Heading = styled.h1`
  color: #2f2f2f;
  font-size: larger;
  text-align: center;
  padding: 5px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.1);
  text-transform: capitalize;
`;

const Paragraph = styled.p`
  font-style: italic;
`;


export default function Post({ post }) {
  return (
    <PostBody>
      <Heading>{post.title}</Heading>
      <Paragraph>{post.body}</Paragraph>
    </PostBody>
  );
}
