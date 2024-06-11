import { useDispatch } from "react-redux";
import { addActionMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useActionMovie = ()=>{
    
const dispatch = useDispatch();
//Fetching API from TMDB
const getActionMovie = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=878&with_origin_country=IN', API_OPTIONS)
  const json = await data.json();
  
  
  dispatch(addActionMovie(json.results));
//   dispatch(addNowplayingMovie(json.results));

}

useEffect(()=>{
   getActionMovie();
},[])
}

export default useActionMovie;