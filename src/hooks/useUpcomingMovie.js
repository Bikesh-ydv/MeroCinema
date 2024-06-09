import { useDispatch } from "react-redux";
import { addNowplayingMovie, addUpcomingMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useUpcomingMovie = ()=>{
    
const dispatch = useDispatch();
//Fetching API from TMDB
const getUpcomingMovies = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/upcoming', API_OPTIONS)
  const json = await data.json();
  dispatch(addUpcomingMovie(json.results));

}

useEffect(()=>{
   getUpcomingMovies();
},[])
}

export default useUpcomingMovie;