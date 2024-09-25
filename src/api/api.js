import axios from "axios"
import { getPokemonIdByUrl } from "../utils/getPokemonIdByUrl"
import { getPokemonImageUrlById } from "../utils/getPokemonImageUrl"
import { getPokemonTypes } from "../utils/getPokemonTypes"

export async function fetchPokemons(pageParam = 0) {
  const limit = 15
  const offset = pageParam * limit

  const response = await axios
    .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)

  return response.data
} 

export async function fetchPokemonDetails(url) {
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
