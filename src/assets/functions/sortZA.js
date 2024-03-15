export const sortZA = (data, setData) => {
  const sortedMovies = [...data].sort((a, b) => b.title.localeCompare(a.title))
  setData(sortedMovies)
}
