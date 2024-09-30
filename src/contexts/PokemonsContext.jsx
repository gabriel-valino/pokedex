import React, { createContext, useContext, useState } from 'react';
import { fetchPokemons } from '../api/api';
import { useInfiniteQuery } from '@tanstack/react-query';

const PokemonsContext = createContext();

export const PokemonsContextProvider = ({ children }) => {
  const [currentPokemonSelected, setCurrentPokemonSelected]  = useState(null)  
  const [filteredPokemons, setFilteredPokemons]  = useState(null)  

  const { data: pokemons, hasNextPage, fetchNextPage, isFetchingNextPage, isLoading, isFetching } = useInfiniteQuery(
    {
      queryKey: ['pokemons'],
      queryFn: ({ pageParam = 0 }) => fetchPokemons(pageParam),
      getNextPageParam: (lastPage, pages) => {
        const totalPokemonsLoaded = pages.flatMap(page => page.results).length
        
        if(totalPokemonsLoaded >= 900) {
          return undefined
        } 

        return lastPage.next ? pages.length : undefined
      }
    }
  )
  
  function setCurrentPokemon (pokemonData) {
    setCurrentPokemonSelected(pokemonData)
  }

  function setFilteredPokemonsAccordingToSearch(searchData) {
    setFilteredPokemons(searchData)
  }

  return (
    <PokemonsContext.Provider value={{ 
      pokemons,
      hasNextPage,
      fetchNextPage,
      isLoading,
      isFetchingNextPage,
      isFetching,
      setCurrentPokemon,
      currentPokemonSelected,
      setFilteredPokemonsAccordingToSearch,
      filteredPokemons
    }}>
      {children}
    </PokemonsContext.Provider>
  )
}

export const usePokemon = () => useContext(PokemonsContext)