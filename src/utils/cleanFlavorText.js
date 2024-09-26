export function cleanFlavorText(rawText) {
  let cleanText = rawText.replace(/\n/g, ' ')

  cleanText = cleanText.replace(/\f/g, ' ')
  cleanText = cleanText.replace('é', 'É')

  return cleanText
}