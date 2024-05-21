// src/components/Sidebar.js
import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div`
  position: fixed;
  left: 20px;
  top: 20px;
  height: auto;
  width: 200px;
  background-color: #d4edda;
  padding: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  z-index: 1000;

  @media (max-width: 768px) {
    width: 150px;
    left: 10px;
    top: 10px;
  }
`;

const SidebarTitle = styled.h2`
  color: #6c757d;
`;

const PostLink = styled.a`
  display: block;
  color: #155724;
  padding: 10px 10px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #e2f0d9;
    border-radius: 5px;
    transform: translateY(-2px);
  }
`;

const Sidebar = ({ posts, onPostClick }) => (
  <SidebarContainer>
    <SidebarTitle>Posts</SidebarTitle>
    {posts.map((post, index) => (
      <PostLink key={index} onClick={() => onPostClick(post)}>
        {post.title}
      </PostLink>
    ))}
  </SidebarContainer>
);

export default Sidebar;
