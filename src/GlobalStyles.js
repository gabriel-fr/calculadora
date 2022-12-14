import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    height: 100vh;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    align-items: center;
    text-align: center;

    color: #fff;
    background: linear-gradient(to right, rgb(83,105,118), rgb(41,46,73))
  }
`;

export default GlobalStyle;
