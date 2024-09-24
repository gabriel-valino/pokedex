import { AttributesContainer, CurrentPokemonContainer, EvolutionsContainer, StatusContainer } from "./styles";

import { PokemonTypeContainer } from "../../../../components/PokemonCard/styles";
import { PokemonStatus } from "../../../../components/PokemonStatus";

import squirtle from '/pokemons/007.png'

export function CurrentPokemon() {

  return (
    <CurrentPokemonContainer>
      <div>
        <img src={squirtle} alt="Squirtle" />
        <div>
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

        <AttributesContainer>
          <div>
            <h3>height</h3>
            <p>0.3m</p>
          </div>
          <div>
            <h3>weight</h3>
            <p>2kg</p>
          </div>
        </AttributesContainer>

        <StatusContainer>
          <h3>Status</h3>
          <PokemonStatus />
        </StatusContainer>

        <EvolutionsContainer>
          <h3>Evolutions</h3>
          <div>
            <button>
              <img src={squirtle} alt="pokemon name" />
            </button>
              
            <div className="evolution-level">
              <span>Lv. 31</span>
            </div>

            <button>
             <img src={squirtle} alt="pokemon name" />
            </button>

            <div className="evolution-level">
              <span>Lv. 31</span>
            </div>

            <button>
              <img src={squirtle} alt="pokemon name" />
            </button>
            </div>
          </EvolutionsContainer>
        </div>
        </div>   

    </CurrentPokemonContainer>
  )
}