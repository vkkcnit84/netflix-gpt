
import useGetTrailer from '../hooks/useTrailerMovie';
import { useSelector } from 'react-redux';
const VideoBackground = (id) => {
  useGetTrailer(id);
  const res = useSelector((store) => store.movie?.nowPlayingMovieTrailer?.key);
  const url = "https://www.youtube.com/embed/" + res + "?&autoplay=1&mute=1";

  return (
    <div className="w-screen">
      <div>
      <iframe 
       className="w-full aspect-video"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
      </div>
    </div>
  )
}

export default VideoBackground;