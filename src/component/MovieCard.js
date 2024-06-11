import { IMG_CDN_URL } from "../utils/constants";

const MovieCard =({posterPath})=>{
    return(
        <div className="pr-3">
            <div className="w-40  relative  overflow-hidden hover:scale-300">
                <img 
                className=" transition-all duration-1000 ease-in-out transform bg-center bg-object hover:scale-120"
                alt="movieCard"
                src={IMG_CDN_URL + posterPath}
                ></img>
            </div>
        </div>
    )

}
export default MovieCard;