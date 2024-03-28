import React from 'react'

const MovieCard = (movie) => {
    console.log('movie card:' ,movie);
    const { title, overview, poster_path } = movie.movie;
    const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
  return (
    <div className='flex flex-wrap p-2'>
        {/* <h1>{title}</h1> */}
        {/* <span className='flex flex-wrap'>
            {overview}
        </span> */}
        <div className='w-[200px]'>
            <img src={imgUrl} />
        </div>
    </div>
  )
}

export default MovieCard