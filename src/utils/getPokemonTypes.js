export function getPokemonTypes(details) {
  const types = details.types.map(info => info.type.name)
  return types
}