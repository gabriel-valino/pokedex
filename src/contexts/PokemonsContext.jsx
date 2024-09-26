import React, { createContext, useContext, useState } from 'react';
import { fetchPokemons } from '../api/api';
import { useInfiniteQuery } from '@tanstack/react-query';

const PokemonsContext = createContext();

export const PokemonsContextProvider = ({ children }) => {
  const [currentPokemonSelected, setCurrentPokemonSelected]  = useState(null)  
  const { data: pokemons, hasNextPage, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
    {
      queryKey: ['pokemons'],
      queryFn: ({ pageParam = 0 }) => fetchPokemons(pageParam),
      getNextPageParam: (lastPage, pages) => {
        const totalPokemonsLoaded = pages.flatMap(page => page.results).length
        
        if(totalPokemonsLoaded >= 200) {
          return undefined
        } 

        return lastPage.next ? pages.length : undefined
      }
    }
  )
  

  function setCurrentPokemon (pokemonData) {
    setCurrentPokemonSelected(pokemonData)
  }

  return (
    <PokemonsContext.Provider value={{ pokemons, hasNextPage, fetchNextPage, isFetchingNextPage, setCurrentPokemon, currentPokemonSelected }}>
      {children}
    </PokemonsContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonsContext)