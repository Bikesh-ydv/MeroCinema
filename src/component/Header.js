import { onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { NETFLIX_URL } from "../utils/constants";
import Profile from "../images/userProfile.jpeg"

const Header =()=>{
const dispatch = useDispatch();
const navigate =useNavigate();
const user = useSelector((store)=>store.user)  
useEffect( () => {
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
      
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}))
       navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    })
  
  return ()=> unsubscribe();

 } ,[])

 const handleSignOut = ()=>{
  signOut(auth).then(() => {
  
  }).catch((error) => {
   // An error happened.
  });
  }

  

    return(
        <div className="absolute w-screen flex justify-between px-8 py-2 bg-gradient-to-b from-black z-10">
            <img
            className=" w-40 "
            src={NETFLIX_URL}></img>

           { user && (<div className="flex space-x-3  p-2 ">
            <img 
            className="w-10 h-10"
            src={Profile}></img>
          

          <button className=" h-10 px-3 text-bold bg-red-500 text-white text-xl z-10"
            onClick={handleSignOut}>Sign Out</button>
          </div>
         )}

        </div>
    )
}
export default Header;