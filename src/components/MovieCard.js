import React from 'react'

const MovieCard = (movie) => {
    console.log('movie card:' ,movie);
    const { poster_path } = movie.movie;
    const imgUrl = `https://image.tmdb.org/t/p/w500/${poster_path}`
  return (
    <div className='flex flex-wrap p-2'>
        <div className='w-[200px]'>
            <img src={imgUrl} alt='movie'/>
        </div>
    </div>
  )
}

export default MovieCard