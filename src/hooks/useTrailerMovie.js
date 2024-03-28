import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { nowPlayingMovieTrailer } from "../utils/movieSlice";
import { API_OPTIONS, TMDB_BASE_URL } from "../utils/constant";

const useGetTrailer = (id) => {
    const dispatch = useDispatch();

    const getTrailer = async () => {        
         const res = await fetch(`${TMDB_BASE_URL}${id.id}/videos?language=en-US`, API_OPTIONS);
         const data = await res.json();
         const trailer = data.results.find((result) => result.type === 'Trailer');
         console.log('results trailer', trailer);
        dispatch(nowPlayingMovieTrailer(trailer))
    }

  useEffect(() => {
        getTrailer();
  }, [])

}

export default useGetTrailer;