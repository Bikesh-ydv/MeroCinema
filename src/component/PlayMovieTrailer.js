import { Link, useNavigate, useParams } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";
import Header from "./Header";
import BackgroundVideo from "./TrailerBackground";
import { useSelector } from "react-redux";
import BackIcon from "../images/back_arrow_icon.png"
import NotFound from "../utils/notFound";

const PlayMovieTrailer =()=>{
    const {id} = useParams();
    const movieId =id;
    useMovieTrailer({movieId});
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
    const navigate = useNavigate()
    return (!trailerVideo) ? <NotFound/> : (
        <div className="flex bg-black">
           <div className="w-16 p-1  m-4">
            <img  className="cursor-pointer"
            onClick={()=>navigate(-2)}
            src={BackIcon}></img> 
          </div>
          <div className="w-[80%] mx-auto right-0 left-0 bg-black">
          
           <iframe 
           className="w-full aspect-video  "
        //    width="560"
        //    height="315" 
           src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1?&mute=0&controls=0&loop=1&playlist="+trailerVideo?.key } 
           title="YouTube video player" 
           loading="lazy"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        </div>
    )
}
export default PlayMovieTrailer;