const VideoTitle =({title,overview})=>{
    return(
        <div className="pt-32 px-12 w-screen aspect-video  bg-gradient-to-b from-black absolute text-white ">
            <h1 className="text-6xl font-bold text-orange-500">{title}</h1>
            <p className="py-5 w-[30%] text-lg">{overview}</p>
            <div className="space-x-3">
                <button className="bg-gray-500 text-black p-3 px-16 text-xl  rounded-lg">Play</button>
                <button className="bg-gray-500 text-black p-3 px-10 text-xl  rounded-lg">MoreInfo</button>
            </div>
        </div>
    )
}
export default VideoTitle;