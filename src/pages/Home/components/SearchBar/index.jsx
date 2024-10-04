import { SearchBarContainer } from "./styles";
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useQuery } from "@tanstack/react-query";

import { usePokemon } from "../../../../contexts/PokemonsContext";
import { fetchPokemonsByName } from "../../../../api/api";

import searchIcon from '/search.svg'

const schema = z.object({
  pokemonName: z.string().transform((val) => val.toLowerCase()), 
});

export function SearchBar() {
  const { setFilteredPokemonsAccordingToSearch } = usePokemon()

  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm({
    resolver: zodResolver(schema),
  })

  const pokemonName = watch('pokemonName') || ""

  const { data: filteredPokemonsArray } = useQuery({
    queryKey: ['pokemons', pokemonName],
    queryFn: () => fetchPokemonsByName(pokemonName),
    enabled: pokemonName.length > 0, 
    keepPreviousData: true,
  })


  function onSubmit () {
    setFilteredPokemonsAccordingToSearch(filteredPokemonsArray)
    reset()
  }

  return (
    <SearchBarContainer onSubmit={handleSubmit(onSubmit)}>
      <input type="text" id="search" placeholder="Search for a Pokémon" {...register("pokemonName")}/>
      <button type="submit" htmlFor="search">
        <img src={searchIcon} alt="search icon - pokeball" />
      </button>
      {errors.pokemonName && <span>{errors.pokemonName.message}</span>}
    </SearchBarContainer>
  )
}