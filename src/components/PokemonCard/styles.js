import styled from "styled-components";

export const PokemonCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px;
  height: auto;
  min-width: 20%;
  padding-top: 40px;
  border-radius: 10px;

  background-color: white;
  box-sizing: content-box;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  cursor: pointer;
  border: 2px solid transparent; 
  transition: 100ms ease-out;

  > img {
    max-width: 74px;  
    object-fit: cover;

    @media (max-width: 1100px) {
      max-width: 54px; 
      height: 54px;
    } 
  }

  > p {
    margin-top: 4px;
    font-size: 0.75rem;
    font-weight: bold;
    color: ${(props) => props.theme['gray']}
  }


  > h3 {
    font-size: 1.25rem;
    font-weight: bold;
    color: ${(props) => props.theme['dark']}
  }

  &:hover {
    border-color: ${(props) => props.theme['border']};
  }
  &:hover img{
    scale: 120%;
  }
`

