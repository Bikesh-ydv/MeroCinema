import { useSelector } from "react-redux";
import BackgroundVideo from "./TrailerBackground";
import VideoTitle from "./TrailerTitle";


const MainContainer = ()=>{
const movies = useSelector(store=>store.movies?.nowPlayingMovie);
if(!movies) return
// let rand = Math.floor(Math.random()*movies.length);
// console.log(rand);
const mainMovie = movies[12];
const {original_title, overview,id}=mainMovie;
console.log(id);

    return(
        <div>
           
           <VideoTitle title={original_title} overview={overview} movieId={id}/>
           <BackgroundVideo movieId={id} />
        </div>
    )
}
export default MainContainer;