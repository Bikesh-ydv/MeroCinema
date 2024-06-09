import { useDispatch } from "react-redux";
import { addNowplayingMovie, addTopRatedMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedMovie = ()=>{
    
const dispatch = useDispatch();
//Fetching API from TMDB
const getTopRatedMovie = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/top_rated', API_OPTIONS)
  const json = await data.json();
  dispatch(addTopRatedMovie(json.results));

}

useEffect(()=>{
   getTopRatedMovie();
},[])
}

export default useTopRatedMovie;