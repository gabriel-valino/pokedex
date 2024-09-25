import { PokemonType, PokemonTypeContainer } from "./styles";

export function PokemonTypeTags ({ types, name }) {
  
  return (
    <PokemonTypeContainer>
      {types.map((type) => {
        const key = `${type}-${name}`
        return (
          <PokemonType key={key} $type={type}>
            <span>{type}</span>
          </PokemonType>)
      })}
    </PokemonTypeContainer>
  )
}