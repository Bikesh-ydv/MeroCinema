import Header from "./Header";
import Profile from "../images/userProfile.jpeg"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import useNowPlayingMovie from "../hooks/useNowPlayingMovies";


const Browse =()=>{


const handleSignOut = ()=>{
 signOut(auth).then(() => {
  
 }).catch((error) => {
  // An error happened.
 });
 }

 useNowPlayingMovie();
    return(
        <div>
            <Header/>
    
        
        
        <div className="flex justify-end space-x-8 px-6 py-4 ">
            <img 
            className="w-12 h-12 z-10"
            src={Profile}></img>
          

          <button className=" h-12 px-3 text-bold bg-red-500 text-white text-xl z-10"
            onClick={handleSignOut}>Sign Out</button>
          </div>
        
       
       

      

      
        </div>
    )
}
export default Browse;