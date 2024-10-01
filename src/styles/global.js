import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: 0;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.dark}
  }

  body {
    background-color: ${(props) => props.theme.background};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;
    height: 100vh;

    > div {
      height: 100vh;
    }
  }

  body, input-security, textarea, button {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.6;
  }
`