import { PokeListContainer } from "./styles";

import { PokemonCard } from "../../../../components/PokemonCard";

export function PokeList() {

  return (
    <PokeListContainer>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </PokeListContainer>
  )
}