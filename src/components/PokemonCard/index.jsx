import { PokemonCardContainer, PokemonTypeContainer } from "./styles";

import squirtle from '../../../public/pokemons/007.png'

export function PokemonCard () {
  return (
    <PokemonCardContainer>
      <img src={squirtle} alt="Squirtle" />
      <p>Nº 1</p>
      <h3>Squirtle</h3>
        
      <PokemonTypeContainer>
        <div>
          <span>water</span>
        </div>
        <div>
          <span>eletric</span>
        </div>
      </PokemonTypeContainer>
    </PokemonCardContainer>
  )
}