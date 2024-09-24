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
    width: 74px;
    min-width: 35%; 
    object-fit: cover;
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

export const PokemonTypeContainer = styled.div`
  margin-top: .5rem;
  display: flex;
  gap: .7rem;

  div {
    padding: 3px 7px;
    line-height: 100%;
    background-color: ${(props) => props.theme['blue']};
    border-radius: 5px;

    span {
      color: ${(props) => props.theme['dark']};
      font-weight: 600;
      font-size: 14px;
    }
  }
`