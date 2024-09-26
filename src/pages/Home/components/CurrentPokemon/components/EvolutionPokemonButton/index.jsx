import { getPokemonImageUrlById } from "../../../../../../utils/getPokemonImageUrlById";
import { PokemonButtonContainer } from "./styles";
import squirtle from '/pokemons/006.png'


export function EvolutionPokemonButton ({id}) {
  const pokemonImg = getPokemonImageUrlById(id)

  return (
    <>
      <PokemonButtonContainer>
        <img src={pokemonImg} alt="pokemon name" />
      </PokemonButtonContainer>
    </>
  )
}