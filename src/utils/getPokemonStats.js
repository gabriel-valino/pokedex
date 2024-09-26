export function getPokemonStats(details) {
  if (!Array.isArray(details.stats)) {
    return { total: 0 };
  }

  const formatStatName = (stat) => {
    if(stat.includes('-')){
      return stat
        .split('-')
        .map((word, index) => {
          return index === 0
          ? word.toLowerCase()
          : word[0].toUpperCase() + word.slice(1).toLowerCase()
        })
        .join('')
    }

    return stat
  }

  const stats = details.stats.reduce(
    (acc, item) => {
      acc[formatStatName(item.stat.name)] = item.base_stat
      
      acc.total += item.base_stat

      return acc
    },
    { total: 0}
  )

  return stats
}