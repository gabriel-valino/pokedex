import styled from "styled-components";

export const PokemonCardContainer = styled.button`
  width: 100%;
  border: 2px solid transparent; 
  border-radius: 10px;

  &:focus {
      border-color: ${(props) => props.theme['red']};
    }

  &:hover {
    border-color: ${(props) => props.theme['red']};
  }  

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
    box-sizing: border-box;
    cursor: pointer;
    transition: 100ms ease-out;

    

    

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

