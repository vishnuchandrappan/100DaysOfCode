import React from "react";
import styled from "styled-components";

const PostBody = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 4px 4px 10px #2f2f2f6c;
`;

const Heading = styled.h3`
  color: #2f2f2f;
`;

const Paragraph = styled.p`
  text-align: justify;
  padding: 10px;
  font-size: smaller;
`;

export default function Post({ post }) {
  return (
    <PostBody>
      <Heading>{post.title}</Heading>
      <Paragraph>{post.body}</Paragraph>
    </PostBody>
  );
}
