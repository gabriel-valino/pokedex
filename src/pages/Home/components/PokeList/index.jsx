import { PokeListContainer } from "./styles";

import { PokemonCard } from "../../../../components/PokemonCard";
import { fetchPokemons } from "../../../../api/api";
import { useEffect, useState } from "react";

export function PokeList() {
  const [pokemons, setPokemons] = useState(null)

  useEffect(() => {
    async function getPokemons() {
      const pokemons = await fetchPokemons()

      setPokemons(pokemons.results)
      console.log(pokemons.results)
    }

    getPokemons()
  },[])

  return (
    <PokeListContainer>
      {pokemons && pokemons.map(pokemon => {
        return <PokemonCard key={pokemon.url} data={pokemon}/>
      })}
    </PokeListContainer>
  )
}