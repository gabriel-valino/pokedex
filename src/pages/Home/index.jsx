import { Header } from "../../components/Header";
import { HomeContainer, PokedexInfo } from "./styles";

import { SearchBar } from "./components/SearchBar";
import { PokeList } from "./components/PokeList";
import { CurrentPokemon } from "./components/CurrentPokemon";

export function Home() {
  return (
    <>
      <Header />

      <HomeContainer>
        <PokedexInfo>
          <SearchBar />
          <PokeList />
        </PokedexInfo>
        
        <CurrentPokemon />
      </HomeContainer>
    </>
  )
}