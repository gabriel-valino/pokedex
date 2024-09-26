import axios from "axios"
import { getPokemonIdByUrl } from "../utils/getPokemonIdByUrl"
import { getPokemonImageUrlById } from "../utils/getPokemonImageUrlById"
import { getPokemonTypes } from "../utils/getPokemonTypes"
import { cleanFlavorText } from "../utils/cleanFlavorText"
import { getPokemonStats } from "../utils/getPokemonStats"
import { getPokemonMeasurements } from "../utils/getPokemonMeasurements"

export async function fetchPokemons(pageParam = 0, search = "") {
  const limit = 15
  const offset = pageParam * limit

  const response = await axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)

  return response.data
} 

export async function fetchPokemonFirstDetails(url) {
  const response = await axios
    .get(url)

  const details = response.data

  const id = getPokemonIdByUrl(url)
  const types = getPokemonTypes(details)
  const imgUrl = getPokemonImageUrlById(id)

  return {
    id,
    types,
    imgUrl,
    name: details.name
  }
} 

export async function fetchPokemonCharacteristic(speciesUrl) {
  const response = await axios
    .get(speciesUrl)

  const { flavor_text_entries: texts} = response.data

  const characteristic = texts
    .find((entry) => entry.language.name === 'en').flavor_text

  return cleanFlavorText(characteristic)
}

export async function fetchPokemonEvolutions(speciesUrl) {
  const speciesResponse = await axios
    .get(speciesUrl)

  const evolutionResponse = await axios 
    .get(speciesResponse.data.evolution_chain.url)
  
  const { chain } = evolutionResponse.data

  let currentPokemonChain = chain
  const pokemonEvolutions = []

  while (currentPokemonChain.evolves_to.length !== 0) {
    const name = currentPokemonChain.species.name
    const id = getPokemonIdByUrl(currentPokemonChain.species.url)
    const pokemonUrl = currentPokemonChain.species.url
    let evolvesTo = ''
    let previousEvolutionLevel = 0
    let nextEvolutionLevel = 0
    let nextPokemonId = 0

    const hasNextEvolution = currentPokemonChain.evolves_to.length !== 0
    
    if(hasNextEvolution){
      evolvesTo = currentPokemonChain.evolves_to[0].species.name
      nextEvolutionLevel = currentPokemonChain.evolves_to[0].evolution_details[0].min_level
      nextPokemonId = getPokemonIdByUrl(currentPokemonChain.evolves_to[0].species.url)
    }

    const hasPreviousEvolution = currentPokemonChain.evolution_details.length !== 0

    if(hasPreviousEvolution) {
      previousEvolutionLevel = currentPokemonChain.evolution_details[0].min_level
    }

    pokemonEvolutions.push({ name, pokemonUrl, evolvesTo, previousEvolutionLevel, nextEvolutionLevel, id, nextPokemonId })
    currentPokemonChain = currentPokemonChain.evolves_to[0]
  } 

  return pokemonEvolutions
}

export async function fetchPokemonDetails(url) {
  const response = await axios
    .get(url)

  const details = response.data
  
  const characteristic = await fetchPokemonCharacteristic(details.species.url)
  const id = details.id
  const { height, weight } = getPokemonMeasurements(details)
  const types = getPokemonTypes(details)
  const imgUrl = getPokemonImageUrlById(id)
  const stats = getPokemonStats(details)
  console.log(details)
  const evolutions = await fetchPokemonEvolutions(details.species.url)

  return {
    name: details.name,
    id,
    types,
    imgUrl,
    characteristic,
    stats,
    height,
    weight,
    evolutions
  }
} 



