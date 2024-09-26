import { PokemonType, PokemonTypeContainer } from "./styles";

export function PokemonTypeTags ({ types, pokemonName }) {
  
  return (
    <PokemonTypeContainer>
      {types.map((type) => {
        const key = `${type}-${pokemonName}`
        return (
          <PokemonType key={key} $type={type}>
            <span>{type}</span>
          </PokemonType>)
      })}
    </PokemonTypeContainer>
  )
}