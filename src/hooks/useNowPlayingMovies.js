import { useDispatch } from "react-redux";
import { addNowplayingMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovie = ()=>{
    
const dispatch = useDispatch();
//Fetching API from TMDB
const getNowPlayingMovies = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS)
  const json = await data.json();
  console.log(json.results);
  dispatch(addNowplayingMovie(json.results));

}

useEffect(()=>{
   getNowPlayingMovies();
},[])
}

export default useNowPlayingMovie;