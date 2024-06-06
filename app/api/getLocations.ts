export async function getLocations() {
  const res = await fetch('https://rickandmortyapi.com/api/location')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
