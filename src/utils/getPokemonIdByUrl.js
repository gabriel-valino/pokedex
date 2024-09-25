export function getPokemonIdByUrl(url) {
  const urlAsArray = url.split('/')
  return urlAsArray[urlAsArray.length - 2]
}