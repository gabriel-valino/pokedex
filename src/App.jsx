import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { Global } from './styles/global.js'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

import { Home } from "./pages/Home";
import { PokemonsContextProvider } from "./contexts/PokemonsContext.jsx";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
        <QueryClientProvider client={queryClient}>
          <PokemonsContextProvider>
            <Home />
          </PokemonsContextProvider>
        </QueryClientProvider>
      <Global />
    </ThemeProvider>
  )
}

