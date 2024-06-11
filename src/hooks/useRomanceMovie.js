import { useDispatch } from "react-redux";
import { addActionMovie, addComedyMovie, addHorrorMovie, addRomanceMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useRomanceMovie = ()=>{
    
const dispatch = useDispatch();
//Fetching API from TMDB
const getRomanceMovie = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=10749', API_OPTIONS)
  const json = await data.json();

  
  dispatch(addRomanceMovie(json.results));
//   dispatch(addNowplayingMovie(json.results));

}

useEffect(()=>{
   getRomanceMovie();
},[])
}

export default useRomanceMovie;