import { useDispatch } from "react-redux";
import {  addDocumentaryMovie } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useDocumenataryMovie = ()=>{
    
const dispatch = useDispatch();
//Fetching API from TMDB
const getDocumentaryMovie = async()=>{
  const data = await fetch('https://api.themoviedb.org/3/discover/movie?&with_genres=99', API_OPTIONS)
  const json = await data.json();
  console.log(json);
  
  dispatch(addDocumentaryMovie(json.results));
//   dispatch(addNowplayingMovie(json.results));

}

useEffect(()=>{
   getDocumentaryMovie();
},[])
}

export default useDocumenataryMovie;