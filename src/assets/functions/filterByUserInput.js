export const filterByUserInput = (userInput, data, setfilteredData) => {
  const filteredData = [...data].filter((item) =>
    item.title.toLowerCase().includes(userInput.toLowerCase())
  )
  setfilteredData(filteredData)
}
