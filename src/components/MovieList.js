import MovieCard from "./MovieCard"
export const MovieList = (movieList) => {
    console.log('movieList:' ,movieList);
  return (
    <div className="">
        <div>
        { movieList.title && <h1 className="font-bold text-2xl">{movieList.title}</h1>}

        </div>
        <div className="flex overflow-x-auto whitespace-nowrap">
            { movieList.movieList.map((movie, index) => <MovieCard key={index} movie={movie}/>) }
        </div>
    </div>
  )
}
