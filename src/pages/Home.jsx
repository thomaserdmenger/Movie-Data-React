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
  }, [userInput, data])

  return (
    <>
      <main>
        <section className='flex flex-col pt-36 items-center bg-[#232327] pb-28'>
          <h1 className='text-5xl font-extralight mb-14 text-white text-center p-4'>
            Find the best movies to watch
          </h1>
          <form
            className='m-auto w-full flex justify-center mb-20 mt-4'
            onSubmit={(e) => e.preventDefault()}>
            <input
              className='border-2 border-purple-600 bg-[#232327] rounded-full px-2 py-2 text-center text-gray-300 placeholder:text-gray-300 w-8/12 md:w-4/12 outline-none shadow-lg shadow-purple-900'
              type='text'
              name='userInput'
              id='userInput'
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder='Search a movie title'
            />
          </form>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <div className='flex gap-2'>
              <Button
                text='Date '
                onClick={() => dateAscending(data, setData)}
                svg={
                  <svg
                    className='fill-gray-300 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'>
                    <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM385 231c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-71-71V376c0 13.3-10.7 24-24 24s-24-10.7-24-24V193.9l-71 71c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L239 119c9.4-9.4 24.6-9.4 33.9 0L385 231z' />
                  </svg>
                }
              />
              <Button
                text='Date'
                onClick={() => dateDescending(data, setData)}
                svg={
                  <svg
                    className='fill-gray-300 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 512 512'>
                    <path d='M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z' />
                  </svg>
                }
              />
            </div>
            <div className='flex'>
              <Button
                text='Best Rate'
                svg={
                  <svg
                    className='fill-gray-300 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'>
                    <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
                  </svg>
                }
                onClick={() => bestRate(data, setData)}
              />
              <Button
                text='A-Z'
                svg={
                  <svg
                    className='fill-gray-300 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'>
                    <path d='M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 320c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 416H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 352H352c-17.7 0-32-14.3-32-32zM416 32c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 224H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128C392.8 38.8 403.9 32 416 32zM395.8 176h40.4L416 135.6 395.8 176z' />
                  </svg>
                }
                onClick={() => sortAZ(data, setData)}
              />
              <Button
                text='Z-A'
                svg={
                  <svg
                    className='fill-gray-300 w-5'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 576 512'>
                    <path d='M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 64c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zm96 192c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 262.8 428.1 256 416 256zM395.8 400L416 359.6 436.2 400H395.8z' />
                  </svg>
                }
                onClick={() => sortZA(data, setData)}
              />
            </div>
          </div>
        </section>
        <section>
          {userInput.length === 0 ? (
            <RenderMovies data={data} />
          ) : (
            <RenderMovies data={filteredData} />
          )}
        </section>
      </main>
    </>
  )
}
