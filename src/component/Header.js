import { onAuthStateChanged,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { NETFLIX_URL } from "../utils/constants";
import Profile from "../images/userProfile.jpeg"
import Caret from "../images/caret_icon.svg"

const Header =()=>{
  
  const [toggle, setToggle] = useState(false);
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

  const handleVisibility= ()=>{
    setToggle(!toggle)
    
  }

  

    return(
        <div className="absolute w-screen flex justify-between p-8 py-2 bg-gradient-to-b from-black z-10">
            <img
            className=" w-40 "
            src={NETFLIX_URL}></img>

           { user && 
           ( <div className="flex justify-between  p-2 w-3/4">
             <div>
            <ul className="text-white flex p-2 float-start space-x-5 cursor-pointer">
              <li className="text-xl">Home</li>
              <li className="text-xl">TV Shows</li>
              <li className="text-xl">Movies</li>
              </ul>
              </div>
              <div className="flex">
                <h1 className=" text-white text-2xl p-2 font-bold">Welcome,</h1>
                <span className="text-yellow-500 text-2xl font-semibold py-2 px-1">{user.displayName}</span>
              </div>
            
            <div className="flex relative z-1 pr-20  cursor-pointer">
              
            <img 
            onClick={handleVisibility}
            className="w-8 h-8 rounded-sm cursor-pointer "
            src={Profile}>
            </img>
            <div className="mt-2 p-1 ">
            <svg 
            className=""
            width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-caret-down" fill="white" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M3.204 5L8 10.481 12.796 5H3.204zm-.753.659l4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
</svg>
        </div>
            {
              toggle &&
            (<div 
            className=' z-1 w-full -left-8  bg-gray-900 rounded-md p-2 px-4 absolute top-[90%]'
            ><p className="text-white text-lg font-medium "
            onClick={handleSignOut}
            >SignOut</p>
            </div>
            )
               }
            </div>
          
           

          {/* <button className=" h-8 px-3 text-bold bg-red-500 text-white text-xl z-10"
            onClick={handleSignOut}>Sign Out</button> */}
          
          </div>
         )}

        </div>
    )
}
export default Header;