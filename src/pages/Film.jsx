import { useParams } from "react-router-dom"
import movies from "../assets/data/movies"

export const Film = () => {
  const { id } = useParams()

  return (
    <main className='mt-20 h-screen bg-[#232327] max-w-screen-2xl m-auto'>
      <section className='grid'>
        <div className='bg-[#232327]'>
          <img src='/images/movie.jpg' alt='Movie Shop' />
        </div>
        <div className='flex flex-col bg-[#232327] text-gray-300 pb-10 px-4 gap-1'>
          <h1 className='text-xl font-bold mb-2 mt-6'>{movies[id].title}</h1>
          <h2 className='font-bold mb-1'>Direction: {movies[id].director}</h2>
          <p>Year: {movies[id].year}</p>
          <p>Duration: {movies[id].duration}</p>
          <p>Rating: {movies[id].rate}</p>
          <div className='flex gap-1'>
            {movies[id].genre.map((item, index) => {
              return index === movies[id].genre.length - 1 ? (
                <p key={index}>{item}</p>
              ) : (
                <p key={index}>{item} |</p>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
