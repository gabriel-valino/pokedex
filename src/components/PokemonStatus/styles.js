import { styled } from 'styled-components'

const PokemonAttributesColors = {
  "HP": "#df2140",
  "ATK": "#ff994d",
  "DEF": "#eecd3d",
  "SpA": "#85ddff",
  "SpD": "#96da83",
  "SPD": "#fb94a8",
  "TOT": "#88aaea",
}

export const PokemonAttribute = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.attribute === "TOT" ? PokemonAttributesColors[props.attribute] : props.theme['background']};
  color: black;
  border-radius: 99999px;
  padding: 4px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${(props) => PokemonAttributesColors[props.attribute]};
    padding: 2px;
 }

  > div span {
    line-height: 100%;
    font-size: 0.75rem;
    font-weight: 800;
    color: white;
  }

  > span {
    margin-top: 2px;
    font-size: 0.875rem;
    font-weight: 600;
    color: black;
    padding-bottom: 2px;
  }
`

export const PokemonStatusContainer = styled.div`
  display: flex;
  gap: 10px;
  text-align: center;
  margin-top: 10px;
`



