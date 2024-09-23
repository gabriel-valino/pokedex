import { CurrentPokemonContainer } from "./styles";


import squirtle from '../../../../../public/pokemons/007.png'
import { PokemonTypeContainer } from "../../../../components/PokemonCard/styles";

export function CurrentPokemon() {

  return (
    <CurrentPokemonContainer>
      <div>
        <img src={squirtle} alt="Squirtle" />
        <p>Nº 7</p>
        <h1>Squirtle</h1>

      <PokemonTypeContainer>
        <div>
          <span>water</span>
        </div>
        <div>
          <span>eletric</span>
        </div>
      </PokemonTypeContainer>

      <h2>Characteristics</h2>
      <span>Squirtle is a small, light-blue Pokémon with an appearance similar to a turtle.</span>

      <div className="atributes">
        <div>
          <h3>height</h3>
          <p>0.3m</p>
        </div>
        <div>
          <h3>weight</h3>
          <p>2kg</p>
        </div>
      </div>

      <div className="status">
        <h3>Status</h3>
        <div></div>
      </div>

      <div><p>dfasdsada</p></div>

      </div>
    </CurrentPokemonContainer>
  )
}