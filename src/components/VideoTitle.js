
const VideoTitle = ({overview, poster_path, original_title}) => {
  return (
    <div className="">
      <h1 className="font-extrabold">{original_title}</h1>
      <span className="font-bold">{overview}</span>
    </div>
  )
}

export default VideoTitle