// src/components/Header.js
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #d4edda;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #c3e6cb;
  border-radius: 10px 10px 0 0;
`;

const Title = styled.h1`
  color: #155724;
`;

const Header = () => (
  <HeaderContainer>
    <Title>Doocong's Blog</Title>
  </HeaderContainer>
);

export default Header;
