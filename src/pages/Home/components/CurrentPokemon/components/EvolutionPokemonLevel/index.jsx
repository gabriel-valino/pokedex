import { PokemonLevelContainer } from "./styles" 

export function EvolutionPokemonLevel ({level}) {
  return (
    <PokemonLevelContainer >
      <span>{level ? `Lv. ${level}` : '?'}</span>
    </PokemonLevelContainer>
  )
}