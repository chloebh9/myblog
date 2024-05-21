import React, { useState } from "react"; // useEffect import 제거
import styled from "styled-components"; // styled-components import 추가
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import Sidebar from "./components/Sidebar";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 250px;
  padding: 20px;
  padding-bottom: 100px; // Footer와 겹치지 않도록 여유 공간을 줍니다.
`;

const App = () => {
  const posts = [
    {
      title: "First Post",
      content: "This is the content of the first post.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Second Post",
      content: "This is the content of the second post.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Third Post",
      content: "This is the content of the third post.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Fourth Post",
      content: "This is the content of the fourth post.",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Fifth Post",
      content: "This is the content of the fifth post.",
      image: "https://via.placeholder.com/150",
    },
  ];

  const [selectedPost, setSelectedPost] = useState(null);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };

  return (
    <AppContainer>
      <GlobalStyles />
      <Header />
      <Sidebar posts={posts} onPostClick={handlePostClick} />
      <MainContent>
        <BlogList posts={posts} onPostClick={handlePostClick} />
      </MainContent>
      <Footer />
    </AppContainer>
  );
};

export default App;
