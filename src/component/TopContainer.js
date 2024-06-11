import { useSelector } from "react-redux";
import BackgroundVideo from "./TrailerBackground";
import VideoTitle from "./TrailerTitle";


const MainContainer = ()=>{
const movies = useSelector(store=>store.movies?.nowPlayingMovie);
if(!movies) return
// let rand = Math.floor(Math.random()*movies.length);
// console.log(rand);
const mainMovie = movies[10];
const {original_title, overview,id}=mainMovie;

    return(
        <div>
           
           <VideoTitle title={original_title} overview={overview}/>
           <BackgroundVideo movieId={id} />
        </div>
    )
}
export default MainContainer;