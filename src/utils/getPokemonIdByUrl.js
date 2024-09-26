export function getPokemonIdByUrl(url) {
  const urlAsArray = url.split('/')

  return Number(urlAsArray[urlAsArray.length - 2])
}