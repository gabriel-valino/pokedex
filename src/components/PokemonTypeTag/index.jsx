import { PokemonType, PokemonTypeContainer } from "./styles";

export function PokemonTypeTags ({ types, name }) {

  return (
    <PokemonTypeContainer type>
      {types.map((type) => {
        return (
        <PokemonType key={`${type}-${name}`} type={type}>
          <span>{type}</span>
        </PokemonType>)
      })}
    </PokemonTypeContainer>
  )
}