import { IMG_CDN_URL } from "../utils/constants";

const MovieCard =({posterPath})=>{
    return(
        <div className="pr-3 ">
            <div className="w-40     ">
                <img 
                className="w-30 "
                alt="movieCard"
                src={IMG_CDN_URL + posterPath}
                ></img>
            </div>
        </div>
    )

}
export default MovieCard;