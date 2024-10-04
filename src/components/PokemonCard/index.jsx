import { PokemonCardContainer } from "./styles";
import { PokemonTypeTags } from '../PokemonTypeTag' 
import { useEffect, useState } from "react";
import { fetchPokemonFirstDetails } from "../../api/api";

export function PokemonCard ({ data }) {
  const [ firstDetails, setFirstDetails ] = useState(null)
  const { name, url } = data

  useEffect(() => {
    async function getPokemonDetails() {
      try {
        const data = await fetchPokemonFirstDetails(url)
        setFirstDetails(data)
      } catch (error) {
        console.error('Erro ao buscar detalhes do pokémons:', error);
      }
    }

    getPokemonDetails()
  }, [url])

  return (
    <>
      {firstDetails  && (
        <PokemonCardContainer>
          <div>
            <img src={firstDetails.imgUrl} alt={name} />
            <p>Nº {firstDetails.id}</p>
            <h3>{firstDetails.name}</h3>
            <PokemonTypeTags types={firstDetails.types} name={name}/>
          </div>
        </PokemonCardContainer>
      )}
    </>
  )
}