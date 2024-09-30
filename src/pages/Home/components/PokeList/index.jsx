import { PokeListContainer } from "./styles";

import { PokemonCard } from "../../../../components/PokemonCard";
import { useCallback, useRef } from "react";
import { usePokemon } from "../../../../contexts/PokemonsContext";

export function PokeList() {
  const { pokemons, filteredPokemons, hasNextPage, fetchNextPage, isFetchingNextPage, setCurrentPokemon } = usePokemon()

  const observer = useRef()

  const lastPokemonElementRef = useCallback(
    (node) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      }, {
        rootMargin: "700px"
      });
      if (node) observer.current.observe(node);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  )

  if(filteredPokemons) {
    return (
      <PokeListContainer>
        {filteredPokemons.map(pokemon => {
          return (
            <div 
              key={pokemon.url} 
              onClick={() => setCurrentPokemon(pokemon)}
            >
              <PokemonCard 
                data={pokemon}   
              />
            </div>
          )
        })}
  
      </PokeListContainer>
    )
  }

  return (
    <PokeListContainer>
      {pokemons && pokemons.pages.map((page, pageIndex) => page.results.map((pokemon, pokemonIndex, resultsArray) => {
        const isLastPokemon = pageIndex === pokemons.pages.length - 1 && pokemonIndex === resultsArray.length - 1

        return (
          <div 
            key={pokemon.url} 
            ref={isLastPokemon ? lastPokemonElementRef : null}
            onClick={() => setCurrentPokemon(pokemon)}
          >
            <PokemonCard 
              data={pokemon}   
            />
          </div>
        )
      }))}
    </PokeListContainer>
  )
}