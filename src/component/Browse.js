import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";
import MainContainer from "./TopContainer";
import SecondayContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";

const Browse =()=>{

 useNowPlayingMovie();
 usePopularMovie();
 useTopRatedMovie();
 useUpcomingMovie();
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondayContainer/>
    
        </div>
    )
}
export default Browse;