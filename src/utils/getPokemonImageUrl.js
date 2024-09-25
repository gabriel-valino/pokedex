export function getPokemonImageUrlById(id) {
  return `/pokemons/${id.padStart(3,0)}.png`
}