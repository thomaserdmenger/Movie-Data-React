import movies from "../assets/data/movies"
import { useState } from "react"
import { RenderMovies } from "../components/RenderMovies"
import { sortAZ } from "../assets/functions/sortAZ"
import { sortZA } from "../assets/functions/sortZA"
import { bestRate } from "../assets/functions/bestRate"
import { dateAscending } from "../assets/functions/dateAscending"
import { dateDescending } from "../assets/functions/dateDescending"
import { Button } from "../components/Button"

export const Home = () => {
  const [data, setData] = useState(movies)

  return (
    <>
      <header className='flex gap-4 justify-center'>
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
      </header>
      <main>
        <RenderMovies data={data} />
      </main>
    </>
  )
}
