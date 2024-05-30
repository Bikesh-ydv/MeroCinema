import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { NETFLIX_URL } from "../utils/constants";
const Header =()=>{
const dispatch = useDispatch();
const navigate =useNavigate();
   
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
  

    return(
        <div className="absolute w-screen px-12 py-4 bg-gradient-to-b from-black z-10">
            <img
            className=" w-40 "
            src={NETFLIX_URL}></img>
        </div>
    )
}
export default Header;