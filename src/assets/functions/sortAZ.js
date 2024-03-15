export const sortAZ = (data, setData) => {
  const sortedMovies = [...data].sort((a, b) => a.title.localeCompare(b.title))
  setData(sortedMovies)
}
