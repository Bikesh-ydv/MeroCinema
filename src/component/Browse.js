import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";
import MainContainer from "./TopContainer";
import SecondayContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import useTrendingMovie from "../hooks/useTrendingMovie";

const Browse =()=>{

 useNowPlayingMovie();
 usePopularMovie();
 useTopRatedMovie();
 useUpcomingMovie();
 useTrendingMovie();
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondayContainer/>
    
        </div>
    )
}
export default Browse;