import Header from "./Header";
import Profile from "../images/userProfile.jpeg"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Browse =()=>{

const navigate =useNavigate();
const handleSignOut = ()=>{
 signOut(auth).then(() => {
  navigate("/")
 }).catch((error) => {
  // An error happened.
 });

 }

    return(
        <div>
           <div className="w-screen px-8 py-4 border flex justify-between">
            <img
            className=" w-40 "
            src="https://assets.nflxext.com/ffe/siteui/acquisition/home/nflxlogo.png"></img>
        
        
        <div className="flex space-x-8 px-6 py-4">
            <img 
            className="w-12 h-12"
            src={Profile}></img>
          

          <button className="border h-12 px-3 text-bold bg-red-500 text-white text-xl"
            onClick={handleSignOut}>Sign Out</button>
          </div>
        
        </div>
       

      

      
        </div>
    )
}
export default Browse;