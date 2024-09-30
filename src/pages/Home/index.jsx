import { Header } from "../../components/Header";
import { CloseModalButton, HomeContainer, Loading, Overflow, PokedexInfo, PokemonContent } from "./styles";

import { SearchBar } from "./components/SearchBar";
import { PokeList } from "./components/PokeList";
import { CurrentPokemon } from "./components/CurrentPokemon";
import { usePokemon } from "../../contexts/PokemonsContext";
import { useEffect, useState } from "react";
import { fetchPokemonDetails } from "../../api/api";

import closeButton from '/close-button.svg'

export function Home() {
  const { currentPokemonSelected, setCurrentPokemon } = usePokemon()
  const [ currentPokemonFirstType, setCurrentPokemonFirstType ] = useState("")

  function handleCloseModal () {
    setCurrentPokemon(null)
    setCurrentPokemonFirstType('')
  }

  useEffect(() => {
    if (!currentPokemonSelected) {
      return;
    }

    async function getPokemonFirstType() {
      try {
        const details = await fetchPokemonDetails(currentPokemonSelected.url);
        const [firstType] = details.types;
        setCurrentPokemonFirstType(firstType);
      } catch (error) {
        console.error("Error to fetch pokemon types", error);
      } 
    }

    getPokemonFirstType();
  }, [currentPokemonSelected]);

  return (
    <HomeContainer $currentPokemonIsSelected={Boolean(currentPokemonSelected)}>
      <Header />
      <PokemonContent>
        <PokedexInfo>
          <SearchBar />
          <PokeList />
        </PokedexInfo>
        {currentPokemonSelected && (
          <>
            <Overflow type={currentPokemonFirstType}/>
            <CloseModalButton onClick={() => handleCloseModal()}>
              <img src={closeButton} alt="X" />
            </CloseModalButton>
          </>
        )}
        <CurrentPokemon/>
      </PokemonContent>
    </HomeContainer>
  )
}