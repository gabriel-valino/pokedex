import { PokemonCardContainer } from "./styles";
import { PokemonTypeTags } from '../PokemonTypeTag' 
import { useEffect, useState } from "react";
import { fetchPokemonDetails } from "../../api/api";

export function PokemonCard ({ data }) {
  const [details, setDetails] = useState(null)
  const { name, url } = data

  useEffect(() => {
    async function getPokemonDetails() {
      try {
        const data = await fetchPokemonDetails(url)
        setDetails(data)
      } catch (error) {
        console.error('Erro ao buscar detalhes do pokémons:', error);
      }
    }

    getPokemonDetails()
  }, [url])

  console.log(details)

  return (
    <>
      {details  && (
        <PokemonCardContainer>
        <img src={details.imgUrl} alt={name} />
        <p>Nº {details.id}</p>
        <h3>Squirtle</h3>
        <PokemonTypeTags types={details.types} name={name}/>
        
      </PokemonCardContainer>
      )}
    </>
  )
}