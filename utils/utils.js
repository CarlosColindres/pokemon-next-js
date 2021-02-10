const colors = {
  bug: '#70bf25',
  dark: '#080b26',
  dragon: '#4a1784',
  electric: '#e8c207',
  fairy: '#ff97a6',
  fighting: '#a0310e',
  fire: '#d12f19',
  flying: '#3a739b',
  ghost: '#3b2042',
  grass: '#0b6d17',
  ground: '#6b340e',
  ice: '#9ae6ed',
  normal: '#a297a5',
  poison: '#7c308e',
  psychic: '#c11b57',
  rock: '#876d51',
  steel: '#727272',
  water: '#374bbf',
}

export const typeChanger = type => {
  return colors[type]
}
