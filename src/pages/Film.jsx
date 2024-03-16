import { useParams } from "react-router-dom"
import movies from "../assets/data/movies"

export const Film = () => {
  const { id } = useParams()

  return (
    <>
      {movies.map((item, index) => {
        if (!item.title.includes(id)) return

        return (
          <main
            key={index}
            className='mt-20 h-screen bg-[#232327] max-w-screen-2xl m-auto'>
            <section className='grid'>
              <div className='bg-[#232327]'>
                <img src='/images/movie.jpg' alt='Movie Shop' />
              </div>
              <div className='flex flex-col bg-[#232327] text-gray-300 pb-10 px-4 gap-1'>
                <h1 className='text-xl font-bold mb-2 mt-6'>{item.title}</h1>
                <h2 className='font-bold mb-1'>Direction: {item.director}</h2>
                <p>Year: {item.year}</p>
                <p>Duration: {item.duration}</p>
                <p>Rating: {item.rate}</p>
                <div className='flex gap-1'>
                  {item.genre.map((gen, index) => {
                    return index === item.genre.length - 1 ? (
                      <p key={index}>{gen}</p>
                    ) : (
                      <p key={index}>{gen} |</p>
                    )
                  })}
                </div>
              </div>
            </section>
          </main>
        )
      })}
    </>
  )
}
