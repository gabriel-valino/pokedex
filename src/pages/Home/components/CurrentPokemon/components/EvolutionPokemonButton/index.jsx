import { useEffect, useState } from "react";
import { getPokemonImageUrlById } from "../../../../../../utils/getPokemonImageUrlById";
import { PokemonButtonContainer } from "./styles";
import { fetchPokemonDetails } from "../../../../../../api/api";
import { usePokemon } from "../../../../../../contexts/PokemonsContext";


export function EvolutionPokemonButton ({id}) {
  const { setCurrentPokemon, currentPokemonSelected, pokemons } = usePokemon()
  const [ pokemonDetails, setPokemonDetails ] = useState({})

  const pokemonImg = getPokemonImageUrlById(id)

  useEffect(() => {
    async function getPokemonDetails() {
      try {
        const datailsUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
        const details = await fetchPokemonDetails(datailsUrl)

        setPokemonDetails({name:details.name, url: `https://pokeapi.co/api/v2/pokemon/${id}`})
      } catch (error) {
        console.error('Erro ao buscar detalhes do pokémons:', error);
      }
    }

    getPokemonDetails()
  }, [id])

  return (
    <>
      {pokemonDetails && (
        <PokemonButtonContainer onClick={() => setCurrentPokemon(pokemonDetails)}>
          <img src={pokemonImg} alt={pokemonDetails.name} />
        </PokemonButtonContainer>
      )}
    </>
  )
}