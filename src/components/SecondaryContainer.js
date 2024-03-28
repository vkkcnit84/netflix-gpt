import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
    const nowPlayingMovie = useSelector((store) => store.movie?.nowPlayingMovie);
    if(!nowPlayingMovie) return;
    console.log('nowPlayingMovie', nowPlayingMovie);
    return (
        <div className="mt-20">
            <MovieList movieList={nowPlayingMovie.results} title="Popular Movies"/>
            <MovieList movieList={nowPlayingMovie.results} title="Tranding Movies"/>
            <MovieList movieList={nowPlayingMovie.results} title="New Movies"/>
        </div>
    )
}

export default SecondaryContainer;