import { Link } from "react-router-dom"

export const RenderMovies = ({ data }) => {
  return (
    <main>
      <section className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 bg-[#232327] max-w-screen-2xl m-auto'>
        {data.map((movie, index) => {
          return (
            <Link
              to={`/film/${movie.title}`}
              key={index}
              className='p-4 rounded-lg text-gray-300 bg-[#333B4D]'>
              <h2 className='text-xl font-bold mb-2'>{movie.title}</h2>
              <p className='pt-0.5 mb-1.5'>Direction: {movie.director}</p>
              <div className='flex gap-2 mb-2'>
                <p>{movie.year}</p>
                <span>|</span>
                <p>{movie.duration}</p>
                <span>|</span>
                <p>{movie.rate}</p>
              </div>
              <div className='flex flex-wrap gap-x-2'>
                {movie.genre.map((item, index) => {
                  return movie.genre.length - 1 === index ? (
                    <p key={index}>{item}</p>
                  ) : (
                    <p key={index}>{item} |</p>
                  )
                })}
              </div>
            </Link>
          )
        })}
      </section>
    </main>
  )
}
