import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
const MovieList = ({category,movies})=>{
   
    
    return(
        <div className="p-4 bg-black">
            <h1 className="md:text-3xl text-xl text-white font-semibold p-2">{category}</h1>
            <div className="flex overflow-x-auto no-scrollbar">
                <div className="flex">
                { movies?.map((movie)=>(
                 <Link to={"/movie/"+ movie.id} key={movie.id}>  <MovieCard posterPath={movie?.poster_path}/></Link> 
                ))
            
                }
            </div>
            </div>
     
        </div>
    )
}
export default MovieList;