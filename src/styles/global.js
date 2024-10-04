import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: 0;
  }

  :focus {
    outline: 0;
    border: 2px ${(props) => props.theme['red']} solid;
    border-radius: 10px;
  } 

  body {
    background-color: ${(props) => props.theme.background};
    color: ${({ theme }) => theme.text};
    -webkit-font-smoothing: antialiased;
    height: 100vh;

    @media (max-width: 1100px) {
      overflow: ${props => props.currentPokemonSelected ? 'hidden': 'auto'};
    }

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