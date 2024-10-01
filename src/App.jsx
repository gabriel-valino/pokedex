import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Global } from './styles/global.js'

import { Home } from "./pages/Home";
import { usePokemon } from "./contexts/PokemonsContext.jsx";

export function App() {
  const { currentPokemonSelected } = usePokemon()

  return (
    <ThemeProvider theme={defaultTheme}>
      <Home />
      <Global currentPokemonSelected={currentPokemonSelected}/>
    </ThemeProvider>
  )
}

