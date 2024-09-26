export function getPokemonMeasurements(details) {
  const height = (details.height / 10) + 'm'
  const weight = (details.weight / 10) + 'kg'

  return { height, weight }
}