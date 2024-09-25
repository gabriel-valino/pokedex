import styled from "styled-components";


export const PokemonTypeContainer = styled.div`
  margin-top: .5rem;
  display: flex;
  gap: .7rem;
`

export const PokemonType = styled.div`
  padding: 3px 7px;
  line-height: 100%;
  background-color: ${(props) => props.theme[props.type]};
  border-radius: 5px;

  span {
    color: ${(props) => props.theme['white']};
    font-weight: 600;
    font-size: 14px;
  }
`
