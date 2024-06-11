import { useDispatch } from "react-redux";
import { addActionMovie, addAnimationMovie, addComedyMovie, addHorrorMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useAnimationMovie = ()=>{
    
const dispatch = useDispatch();
//Fetching API from TMDB
const getAnimationMovie = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=16', API_OPTIONS)
  const json = await data.json();
  console.log(json);
  
  dispatch(addAnimationMovie(json.results));
//   dispatch(addNowplayingMovie(json.results));

}

useEffect(()=>{
   getAnimationMovie();
},[])
}

export default useAnimationMovie;