import { AttributesContainer, CurrentPokemonContainer, EvolutionsContainer, StatusContainer } from "./styles";

import { PokemonStatus } from "../../../../components/PokemonStatus";
import { PokemonTypeTags } from "../../../../components/PokemonTypeTag";

import squirtle from '/pokemons/007.png'
import { usePokemon } from "../../../../contexts/PokemonsContext";
import { useEffect, useState } from "react";
import { fetchPokemonDetails } from "../../../../api/api";
import { getPokemonImageUrlById } from "../../../../utils/getPokemonImageUrlById";

export function CurrentPokemon() {
  const { currentPokemonSelected } = usePokemon()
  const [ details, setDetails ] = useState()

  useEffect(() => {
    async function getPokemonDetails(url) {
      try {
        const data = await fetchPokemonDetails(url)
        setDetails(data)
      } catch (error) {
        console.error('Erro ao buscar detalhes do pokémons:', error);
      }
    }

    if(currentPokemonSelected && currentPokemonSelected.url){
      getPokemonDetails(currentPokemonSelected.url)
    }
  }, [currentPokemonSelected])

  if (!currentPokemonSelected) {
    return <h1>Nenhum Pokémon foi selecionado</h1>;
  }
  
  if (!details) {
    return <h1>Carregando detalhes do Pokémon...</h1>; // Exibe uma mensagem enquanto os detalhes estão sendo carregados
  }

  const pokemonImage = getPokemonImageUrlById(details.id)

  return (
    <>
      {details ? (
      <CurrentPokemonContainer>
        <div>
          <img src={pokemonImage} alt={details.name} />
          <div>
          <p>Nº {details.id}</p>
          <h1>{details.name}</h1>

          <PokemonTypeTags types={['water']} name="squirtle"/>

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
    </CurrentPokemonContainer>) 
    : (
      <CurrentPokemonContainer>
        <div></div>
      </CurrentPokemonContainer>
    )}
    </>
  )
}