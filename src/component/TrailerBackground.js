
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const BackgroundVideo = ({movieId})=>{
    const trailerVideo = useSelector(store=>store.movies?.trailerVideo)
    
    useMovieTrailer({movieId});
    
    return(
        <div className="w-full pt-12 md:p-0">
           <iframe 
           className="w-screen object-cover aspect-video"
        //    width="560"
        //    height="315" 
           src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&controls=0&loop=1&playlist="+trailerVideo?.key } 
           title="YouTube video player" 
           loading="lazy"
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}
export default BackgroundVideo;