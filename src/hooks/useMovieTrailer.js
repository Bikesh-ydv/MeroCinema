import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = ({movieId})=>{
    const dispatch = useDispatch();
    const getMoviesVideo = async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos',API_OPTIONS);
        const json = await data.json();
            console.log(json);
        if(json.status_code !=34)
            {
        const filtertrailer = json.results?.filter(video =>video.type==='Trailer');
       const trailer = filtertrailer?.length ? filtertrailer[0] : json.results[0];
       dispatch(addTrailerVideo(trailer));
            }
    }
    useEffect(()=>{
        getMoviesVideo();
    },[])

}
export default useMovieTrailer;