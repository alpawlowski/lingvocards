import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:300,600');
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.gray};
  }

  a {
    text-decoration: none;
  }

  a, button, input, textarea {
    font-family: "Montserrat", sans-serif;
  }

  .container {
    max-width: 1440px;
  }
  
`;