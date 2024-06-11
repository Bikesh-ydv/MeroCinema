import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { Link } from "react-router-dom";

const SecondayContainer = ()=>{
    const movies = useSelector((store)=>store.movies);
  console.log(movies);
   
    return(
        <div className="bg-black ">
            <div className="-mt-40 ">
           <MovieList category={"Now playing"} movies={movies.nowPlayingMovie}/> 
           <MovieList category={"Romance"} movies={movies.romanceMovie}/>
           <MovieList category={"Horror"} movies={movies.horrorMovie}/>
           <MovieList category={"Comedy"} movies={movies.comedyMovie}/>
           <MovieList category={"Animation"} movies={movies.animationMovie}/>
           <MovieList category={"Action"} movies={movies.actionMovie}/>
           <MovieList category={"Top Rated "} movies={movies.topRatedMovie}/>
           <MovieList category={"Trending"} movies={movies.trendingMovie}/>
           <MovieList category={"Documentary"} movies={movies.documentaryMovie}/>
            
            
             </div>
        </div>
    )
}
export default SecondayContainer;