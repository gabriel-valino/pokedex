export function getPokemonImageUrlById(id) {
  return `/pokemons/${id.toString().padStart(3,0)}.png`
}