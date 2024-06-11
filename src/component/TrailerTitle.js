import { Link } from "react-router-dom";

const VideoTitle =({title,overview})=>{
   
    return(
        <div className="md:pt-32 pt-28 px-6 md:px-12 w-screen aspect-video  bg-gradient-to-b from-black absolute text-white ">
            <h1 className="text-2xl pb-5  md:pb-0 md:text-6xl font-bold text-orange-500">{title}</h1>
            <p className="py-5 hidden  lg:inline-block w-[55%] lg:w-[30%] text-lg">{overview}</p>
            <div className="space-x-3">
                <button className="bg-white md:mt-5 lg:mt-0 text-black p-1 px-4 md:p-3 md:px-14 hover:bg-gray-200 text-sm font-medium md:text-xl md:font-bold rounded-md md:rounded-lg"><Link to={"/movie/748783"}>▶️Play</Link></button>
                {/* <button className="bg-gray-500 text-black p-3 px-10 text-xl  rounded-lg">MoreInfo</button> */}
            </div>
        </div>
    )
}
export default VideoTitle;