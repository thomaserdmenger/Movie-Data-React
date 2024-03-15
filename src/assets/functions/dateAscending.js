export const dateAscending = (data, setData) => {
  const sortedMovies = [...data].sort((a, b) => a.year - b.year)
  setData(sortedMovies)
}
