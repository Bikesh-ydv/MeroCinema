import { useDispatch } from "react-redux";
import { addActionMovie, addHorrorMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useHorrorMovie = ()=>{
    
const dispatch = useDispatch();
//Fetching API from TMDB
const getHorrorMovie = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=27', API_OPTIONS)
  const json = await data.json();
  console.log(json);
  
  dispatch(addHorrorMovie(json.results));
//   dispatch(addNowplayingMovie(json.results));

}

useEffect(()=>{
   getHorrorMovie();
},[])
}

export default useHorrorMovie;