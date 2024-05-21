// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f8f9fa;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;
  }

  footer {
    margin-top: auto;
  }
`;

export default GlobalStyles;
