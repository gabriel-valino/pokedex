import { Header } from "../../components/Header";
import { ButtonToTop, CloseModalButton, HomeContainer, Loading, Overflow, PokedexInfo, PokemonContent } from "./styles";

import { SearchBar } from "./components/SearchBar";
import { PokeList } from "./components/PokeList";
import { CurrentPokemon } from "./components/CurrentPokemon";
import { usePokemon } from "../../contexts/PokemonsContext";
import { useEffect, useState } from "react";
import { fetchPokemonDetails } from "../../api/api";

import closeButton from '/close-button.svg'
import arrowUp from '/arrow-up.svg'

export function Home() {
  const { currentPokemonSelected, setCurrentPokemon } = usePokemon()
  const [ currentPokemonFirstType, setCurrentPokemonFirstType ] = useState("")
  const [show, setShow] = useState(false)

  function handleCloseModal () {
    setCurrentPokemon(null)
    setCurrentPokemonFirstType('')
  }

  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setShow(true);
    } else {
      setShow(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <PokedexInfo >
          <SearchBar />
          <PokeList />
        </PokedexInfo>
        <ButtonToTop $show={show} onClick={scrollToTop} $currentPokemonIsSelected={Boolean(currentPokemonSelected)}>
          <img src={arrowUp} alt="arrow up" />
        </ButtonToTop>
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