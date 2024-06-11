import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";

const SecondayContainer = ()=>{
    const movies = useSelector((store)=>store.movies);
  
   
    return(
        <div className="bg-black ">
            <div className="-mt-40 ">
           <MovieList category={"Now playing"} movies={movies.nowPlayingMovie}/> 
            <MovieList category={"Trending"} movies={movies.trendingMovie}/>
            <MovieList category={"Top Rated "} movies={movies.topRatedMovie}/>
            <MovieList category={"Popular"} movies={movies.popularMovie}/>
            <MovieList category={"Upcoming"} movies={movies.upcomingMovie}/>
             </div>
        </div>
    )
}
export default SecondayContainer;