// src/components/BlogPost.js
import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  background-color: #fff3cd;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #ffeeba;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PostTitle = styled.h2`
  color: #856404;
`;

const PostContent = styled.p`
  color: #856404;
`;

const BlogPost = ({ title, content }) => (
  <PostContainer>
    <PostTitle>{title}</PostTitle>
    <PostContent>{content}</PostContent>
  </PostContainer>
);

export default BlogPost;
