import movies from "../assets/data/movies"
import { useEffect, useState } from "react"
import { RenderMovies } from "../components/RenderMovies"
import { sortAZ } from "../assets/functions/sortAZ"
import { sortZA } from "../assets/functions/sortZA"
import { bestRate } from "../assets/functions/bestRate"
import { dateAscending } from "../assets/functions/dateAscending"
import { dateDescending } from "../assets/functions/dateDescending"
import { Button } from "../components/Button"
import { filterByUserInput } from "../assets/functions/filterByUserInput"

export const Home = () => {
  // State for Movies Data
  const [data, setData] = useState(movies)
  const [filteredData, setfilteredData] = useState([])

  // State for User Input
  const [userInput, setUserInput] = useState("")

  // Set UserInput
  useEffect(() => {
    filterByUserInput(userInput, data, setfilteredData)
  }, [userInput])

  return (
    <>
      <header className='flex flex-col'>
        <div className='flex gap-4 justify-center'>
          <Button
            text='Sort by Date Ascending'
            onClick={() => dateAscending(data, setData)}
          />
          <Button
            text='Sort by Date Descending'
            onClick={() => dateDescending(data, setData)}
          />
          <Button text='Best Rate' onClick={() => bestRate(data, setData)} />
          <Button text='A-Z' onClick={() => sortAZ(data, setData)} />
          <Button text='Z-A' onClick={() => sortZA(data, setData)} />
        </div>
        <form className='m-auto' onSubmit={(e) => e.preventDefault()}>
          <input
            className='border-2 border-gray-300 rounded-full'
            type='text'
            name='userInput'
            id='userInput'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder='Search a movie title'
          />
        </form>
      </header>
      <main>
        {userInput.length === 0 && <RenderMovies data={data} />}
        {userInput.length !== 0 && <RenderMovies data={filteredData} />}
      </main>
    </>
  )
}
