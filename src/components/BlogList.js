// src/components/BlogList.js
import React, { useState } from "react";
import BlogPost from "./BlogPost";
import BlogPostDetail from "./BlogPostDetail";
import styled from "styled-components";

const ListContainer = styled.div`
  margin-bottom: 100px; // Footer에 가려지지 않도록 여유 공간을 줍니다.
`;

const BlogList = ({ posts, onPostClick }) => {
  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    onPostClick(post);
  };

  return (
    <ListContainer>
      {selectedPost ? (
        <BlogPostDetail post={selectedPost} />
      ) : (
        posts.map((post, index) => (
          <BlogPost
            key={index}
            title={post.title}
            content={post.content}
            image={post.image}
          />
        ))
      )}
    </ListContainer>
  );
};

export default BlogList;
