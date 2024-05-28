import Header from "./Header";
import Banner from "../images/Banner.jpg"
import { useRef, useState } from "react";
import { Validateform } from "../utils/validateform";

const Login=()=>{

    const [signIn, setSignIn]= useState(true);
    const [errorMessage, setErrorMessage]=useState(null);
    // const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

 const handleForm =()=>{
    const message = Validateform( email.current.value,password.current.value)
   setErrorMessage(message);

 }

    const setToggle =()=>{
        setSignIn(!signIn);
    }
    return(
        <div className="w-full">
            <Header/>
            <div>
              <img
              className="absolute"
              src={Banner} alt="Banner"></img>
            </div>
                <form 
                onSubmit={(e)=>e.preventDefault()}
                className="my-20 p-5 mx-auto right-0 left-0 w-1/3 bg-gray-900 opacity-90 absolute">
                   <h1 className="text-3xl text-white font-bold p-5">{(!signIn ? "Sign Up" : "Sign In")}</h1>
                    
                   { (!signIn) && (  <input 
                //    ref={name}
                    className="p-3 my-3 mx-7 w-80 rounded text-white  bg-gray-900 border border-white"
                    type="email" placeholder="Enter your name "></input>
                    )
                }
                    <input 
                    ref={email}
                    className="p-3 my-3 mx-7 w-80 rounded text-white bg-gray-900 border border-white"
                    type="email" placeholder="Enter your email "></input>
                    <input
                    ref={password}
                     className="p-3 my-3 mx-7 w-80 rounded border text-white bg-gray-900 border-white"
                    type="password" placeholder="Enter your password "></input>
                   <p className="text-red-500 p-1 mx-7">{errorMessage}</p>
                   
                    <button 
                    onClick={handleForm}
                    className="bg-red-600 p-2 my-5 mx-7 w-80 rounded text-white font-bold">Sign In</button>
                    <span className="p-1  text-gray-400 ">{(!signIn) ? "Already member?" : "New to Netflix?"}</span>
                    <span 
                    onClick={setToggle}
                    className="p-1 text-white cursor-pointer font-bold">{(!signIn) ? "Sign In now.": "Sign up now."}</span>
                </form>
        </div>
    )
}
export default Login;