import movies from "../assets/data/movies"
import { useState } from "react"
import { RenderMovies } from "../components/RenderMovies"
import { sortAZ } from "../assets/functions/sortAZ"
import { sortZA } from "../assets/functions/sortZA"
import { bestRate } from "../assets/functions/bestRate"
import { dateAscending } from "../assets/functions/dateAscending"
import { dateDescending } from "../assets/functions/dateDescending"

export const Home = () => {
  const [data, setData] = useState(movies)

  return (
    <>
      <header className='flex gap-4 justify-center'>
        <button
          onClick={() => dateAscending(data, setData)}
          className='cursor-pointer'>
          Sort by Date Ascending
        </button>
        <button
          onClick={() => dateDescending(data, setData)}
          className='cursor-pointer'>
          Sort by Date Descending
        </button>
        <button
          onClick={() => bestRate(data, setData)}
          className='cursor-pointer'>
          Best Rate
        </button>
        <button
          onClick={() => sortAZ(data, setData)}
          className='cursor-pointer'>
          A-Z
        </button>
        <button
          onClick={() => sortZA(data, setData)}
          className='cursor-pointer'>
          Z-A
        </button>
      </header>
      <main>
        <RenderMovies data={data} />
      </main>
    </>
  )
}
