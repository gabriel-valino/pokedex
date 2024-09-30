import React, { useEffect, useState } from "react";

import { AttributesContainer, CurrentPokemonContainer, EvolutionsContainer, StatusContainer, WithoutCurrentPokemonLoading } from "./styles";

import { PokemonTypeTags } from "../../../../components/PokemonTypeTag";
import { PokemonStatus } from "../../../../components/PokemonStatus";

import { usePokemon } from "../../../../contexts/PokemonsContext";

import { fetchPokemonDetails } from "../../../../api/api";
import { EvolutionPokemonLevel } from "./components/EvolutionPokemonLevel";
import { EvolutionPokemonButton } from "./components/EvolutionPokemonButton";

export function CurrentPokemon() {
  const { currentPokemonSelected } = usePokemon()
  const [ details, setDetails ] = useState()

  useEffect(() => {
    async function getPokemonDetails(url) {
      try {
        const data = await fetchPokemonDetails(url)
        setDetails(data)
      } catch (error) {
        console.error('Error to fetch pokemon details.', error);
      }
    }

    if(currentPokemonSelected && currentPokemonSelected.url){
      getPokemonDetails(currentPokemonSelected.url)
    }
  }, [currentPokemonSelected])

  if (!currentPokemonSelected || !details) {
    return (
      <CurrentPokemonContainer>
        <WithoutCurrentPokemonLoading>
          <img src="/pokeball.svg" alt="pokeball" className="loading" />
        </WithoutCurrentPokemonLoading>
      </CurrentPokemonContainer>
    )
  }

  const { imgUrl, name, id, characteristic, types, height, weight, stats, evolutions } = details

  return (
    <>
      <CurrentPokemonContainer key={id} $currentPokemonIsSelected={Boolean(currentPokemonSelected)}>
        <div>
          <img src={imgUrl} alt={name} className="currentPokemon"/>
          <div>
            <p>Nº {id}</p>
            <h1>{name}</h1>

            <PokemonTypeTags types={types} pokemonName={name}/>

            <h2>Characteristics</h2>
            <span>{characteristic}</span>

            <AttributesContainer>
              <div>
                <h3>height</h3>
                <p>{height}</p>
              </div>
              <div>
                <h3>weight</h3>
                <p>{weight}</p>
              </div>
            </AttributesContainer>

            <StatusContainer >
              <h3>Status</h3>
              <PokemonStatus stats={stats}/>
            </StatusContainer>

            <EvolutionsContainer>
              {evolutions.length >= 1 && <h3>Evolutions</h3>}
              <div>
                {
                  evolutions && evolutions.map((evolution, index, evolutionsArray) => {
                    const isTheLastEvolution = evolutionsArray.length - 1 === index
                    const hasOnlyOneEvolution = evolutionsArray.length === 1

                    return (
                      <React.Fragment key={index}>
                        {hasOnlyOneEvolution ? (
                          <>
                            <EvolutionPokemonButton id={evolution.id}/>
                            <EvolutionPokemonLevel level={evolution.nextEvolutionLevel}/>
                            <EvolutionPokemonButton id={evolution.nextPokemonId}/>
                          </>
                        ) : (
                          <>
                            {!isTheLastEvolution && <EvolutionPokemonButton id={evolution.id}/>}
                            <EvolutionPokemonLevel level={evolution.nextEvolutionLevel}/>
                            <EvolutionPokemonButton id={evolution.nextPokemonId}/>
                          </>
                        )}
                      </React.Fragment>
                      )
                    })
                  }
                </div>
              </EvolutionsContainer>
            </div>
        </div>   
      </CurrentPokemonContainer>
    </>
  )
}