export async function getCharacters() {
  const res = await fetch('https://rickandmortyapi.com/api/character')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
