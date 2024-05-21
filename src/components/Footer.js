// src/components/Footer.js
import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #d4edda;
  padding: 5px; // 푸터의 패딩을 줄여 얇게 만듭니다.
  text-align: center;
  border-top: 2px solid #c3e6cb;
  border-radius: 0 0 10px 10px;
  position: relative;
  width: 100%;
  bottom: 0;
`;

const FooterText = styled.p`
  color: #155724;
  margin: 0;
`;

const Footer = () => (
  <FooterContainer>
    <FooterText>© 2024 Pastel Blog</FooterText>
  </FooterContainer>
);

export default Footer;
