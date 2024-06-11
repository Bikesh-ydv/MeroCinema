import { useDispatch } from "react-redux";
import { addNowplayingMovie, addPopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const usePopularMovie = ()=>{
    
const dispatch = useDispatch();
//Fetching API from TMDB
const getPopularMovie = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=35&with_origin_country=IN', API_OPTIONS)
  const json = await data.json();
  console.log(json);
  
  dispatch(addPopularMovie(json.results));
//   dispatch(addNowplayingMovie(json.results));

}

useEffect(()=>{
   getPopularMovie();
},[])
}

export default usePopularMovie;