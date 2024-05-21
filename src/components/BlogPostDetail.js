// src/components/BlogPostDetail.js
import React from "react";
import styled from "styled-components";

const PostDetailContainer = styled.div`
  background-color: #fff3cd;
  margin: 20px auto;
  padding: 20px;
  border: 2px solid #ffeeba;
  border-radius: 10px;
  width: 80%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const PostDetailTitle = styled.h2`
  color: #856404;
`;

const PostDetailContent = styled.p`
  color: #856404;
`;

const BlogPostDetail = ({ post }) => (
  <PostDetailContainer>
    <PostDetailTitle>{post.title}</PostDetailTitle>
    <PostDetailContent>{post.content}</PostDetailContent>
  </PostDetailContainer>
);

export default BlogPostDetail;
