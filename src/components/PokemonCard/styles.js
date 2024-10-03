import styled from "styled-components";

export const PokemonCardContainer = styled.button`
  width: 100%;
  border: 2px solid transparent; 

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 20px;
    height: auto;
    min-width: 30%;
    padding-top: 40px;
    border-radius: 10px;

    background-color: white;
    box-sizing: content-box;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
    border: 2px solid transparent; 
    transition: 100ms ease-out;

    &:hover {
      border-color: ${(props) => props.theme['border']};
    }

    &:hover img{
      scale: 120%;
    }
  }

  > button {
    height: inherit;
    width: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:focus {

    }
  }

  > div > img {
    max-width: 74px;  
    object-fit: cover;

    @media (max-width: 600px) {
      max-width: 54px; 
      height: 54px;
    } 
  }

  > div > p {
    margin-top: 4px;
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray']}
  }


  > div > h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['dark']}
  }
`

