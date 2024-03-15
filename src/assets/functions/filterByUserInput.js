export const filterByUserInput = (userInput, data, setData) => {
  const filteredData = [...data].filter((item) =>
    item.title.toLowerCase().includes(userInput.toLowerCase())
  )
  setData(filteredData)
}
