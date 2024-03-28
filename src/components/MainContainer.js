import  VideoBackground from './VideoBackground';
import VideoTitle  from './VideoTitle';
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const playingMovie = useSelector((store) => store.movie?.nowPlayingMovie)
   if(!playingMovie) return;
    const { results } = playingMovie;
    const { overview, poster_path,  original_title, id } = results[3];

    return (
        <div className="main-container pt-[10%] bg-black md:pt-0">
            <VideoTitle overview={overview} poster_path={poster_path} original_title={original_title}/>
            <VideoBackground id={id}/>
        </div>
    )
}

export default MainContainer;