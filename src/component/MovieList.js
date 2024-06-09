import MovieCard from "./MovieCard";
const MovieList = ({category,movies})=>{
   
    
    return(
        <div className="p-4 bg-black">
            <h1 className="text-3xl text-white font-semibold p-2">{category}</h1>
            <div className="flex overflow-x-auto no-scrollbar">
                <div className="flex">
                { movies?.map((movie)=>(
                    <MovieCard posterPath={movie?.poster_path}/>
                ))
            
                }
            </div>
            </div>
      
        </div>
    )
}
export default MovieList;