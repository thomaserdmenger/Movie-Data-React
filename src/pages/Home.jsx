import movies from "../assets/data/movies"

export const Home = () => {
  return (
    <main>
      {/* Render Movies Grid */}
      <section className='grid grid-cols-3 gap-4 p-4'>
        {movies.map((movie, index) => {
          return (
            <article
              key={index}
              className='p-2 border-2 border-red-300 rounded-lg'>
              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
              <p>{movie.director}</p>
              <p>{movie.duration}</p>
              <div className='flex gap-2'>
                {movie.genre.map((item, index) => {
                  return <p key={index}>{item}</p>
                })}
              </div>
              <p>{movie.rate}</p>
            </article>
          )
        })}
      </section>
      c
    </main>
  )
}
