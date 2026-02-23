import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    transition: background-color 0.3s, color 0.3s;
  }
`;
