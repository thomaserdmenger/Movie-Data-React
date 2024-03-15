export const dateDescending = (data, setData) => {
  const sortedMovies = [...data].sort((a, b) => b.year - a.year)
  setData(sortedMovies)
}
