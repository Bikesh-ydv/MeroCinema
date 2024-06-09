import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondayContainer = ()=>{
    const movies = useSelector((store)=>store.movies);
    console.log(movies);
    return(
        <div className="bg-black ">
            <div className="-mt-48 ">
            <MovieList category={"Now playing"} movies={movies.nowPlayingMovie}/>
            <MovieList category={"Top Rated "} movies={movies.topRatedMovie}/>
            <MovieList category={"Popular"} movies={movies.popularMovie}/>
            <MovieList category={"Upcoming"} movies={movies.upcomingMovie}/>
             </div>
        </div>
    )
}
export default SecondayContainer;