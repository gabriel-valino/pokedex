import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx'
import { PokemonsContextProvider } from './contexts/PokemonsContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <PokemonsContextProvider>
        <App />
      </PokemonsContextProvider>
    </QueryClientProvider> 
  </StrictMode>
)