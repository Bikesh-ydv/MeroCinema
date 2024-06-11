import { useDispatch } from "react-redux";
import { addNowplayingMovie, addPopularMovie, addTrendingMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrendingMovie = ()=>{
    
const dispatch = useDispatch();
//Fetching API from TMDB
const getTrendingMovie = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/trending/all/day', API_OPTIONS)
  const json = await data.json();
  
  
  dispatch(addTrendingMovie(json.results));
//   dispatch(addNowplayingMovie(json.results));

}

useEffect(()=>{
   getTrendingMovie();
},[])
}

export default useTrendingMovie;