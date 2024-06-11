import { useDispatch } from "react-redux";
import { addActionMovie, addComedyMovie, addHorrorMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useComedyMovie = ()=>{
    
const dispatch = useDispatch();
//Fetching API from TMDB
const getComedyMovie = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=35&with_origin_country=IN', API_OPTIONS)
  const json = await data.json();
  console.log(json);
  
  dispatch(addComedyMovie(json.results));
//   dispatch(addNowplayingMovie(json.results));

}

useEffect(()=>{
   getComedyMovie();
},[])
}

export default useComedyMovie;