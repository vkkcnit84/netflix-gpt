import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { nowPlayingMovie } from "../utils/movieSlice";
import { API_OPTIONS, NOW_PLAYING_MOVIE } from "../utils/constant";
const useNowPlayingMovie = () => {

    const dispatch = useDispatch();
    const apiCall = async () => {
        const url = NOW_PLAYING_MOVIE;
        const resJson = await  fetch(url, API_OPTIONS);
        const data = await resJson.json();
        console.log(data);
        dispatch(nowPlayingMovie(data))
    }

    useEffect(() => {
        apiCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

}



export default useNowPlayingMovie;