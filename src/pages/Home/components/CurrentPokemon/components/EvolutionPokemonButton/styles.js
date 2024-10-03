import styled from "styled-components";

export const PokemonButtonContainer = styled.button`
  text-decoration: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 6px;
  border-radius: 10px;
  transition: 0.2s ease;

  &:focus {
    box-shadow: none;
    background-color: ${props => props.theme['background']};
  }

  &:hover {
    background-color: ${props => props.theme['background']};
  }

  img {
    width: 56px;
    height: 56px;
  }
`