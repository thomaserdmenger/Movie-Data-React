export const bestRate = (data, setData) => {
  const sortedMovies = [...data].sort((a, b) => b.rate - a.rate)
  setData(sortedMovies)
}
