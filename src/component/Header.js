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
           ( <div className="flex justify-end p-2 w-3/4">
              <div className="flex pr-6 ">
                <h1 className=" text-white text-2xl p-2 font-bold">Welcome,</h1>
                <span className="text-yellow-500 text-2xl font-semibold py-2 px-1">{user.displayName}</span>
              </div>
            
            <div className="flex relative z-1 pr-12  cursor-pointer">
              
            <img 
            onClick={handleVisibility}
            className="w-8 h-8 rounded-sm cursor-pointer "
            src={Profile}>
            </img>
            <div className="mt-2 p-1 ">
           <img src={Caret}></img>
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