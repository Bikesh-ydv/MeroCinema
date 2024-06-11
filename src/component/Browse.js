import Header from "./Header";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";
import MainContainer from "./TopContainer";
import SecondayContainer from "./SecondaryContainer";
import Footer from "./Footer";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import useTrendingMovie from "../hooks/useTrendingMovie";
import useActionMovie from "../hooks/useActionMovie";
import useAnimationMovie from "../hooks/useAnimationMovie";
import useComedyMovie from "../hooks/useComedyMovie";
import useDocumenatryMovie from "../hooks/useDocumentary";
import useRomanceMovie from "../hooks/useRomanceMovie";
import useHorrorMovie from "../hooks/useHorrorMovie";

const Browse =()=>{

 useNowPlayingMovie();
 useTopRatedMovie();
 useUpcomingMovie();
 useTrendingMovie();
 useActionMovie();
 useAnimationMovie();
 useComedyMovie();
 useDocumenatryMovie();
 useRomanceMovie();
 useHorrorMovie();
    return(
        <div>
            <Header/>
            <MainContainer/>
            <SecondayContainer/>
            <Footer/>
        </div>
    )
}
export default Browse;