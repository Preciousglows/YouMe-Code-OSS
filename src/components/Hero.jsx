import React from "react";
import { Link } from "react-router-dom";
import defaultimg from "/assets/defaultimg.svg"
function Hero(){
    return (
        <>
        <div className=" flex flex-col h-[80vh] justify-center items-center gap-5">
            <div className="self-center text-center flex justify-center">
                 <img src={defaultimg} alt="Logo"  className="w-4/5 text-2xl"/>
            </div>
            <h1 className="text-white font-medium text-center text-3xl">Empowering Coders. Inspiring Solutions</h1>

            <h2 className="text-white text-2xl text-center w-1/2">Discover coding challenges, connect with a vibrant community, and level up your skills!</h2>
            
            <Link to='/signup'>
            <button className="text-white transition ease-in shadow-primary shadow-sm rounded-lg px-6 py-3 border border-transparent bg-primary hover:bg-transparent hover:border hover:border-primary">Join Now</button>
            </Link>
            
        </div>
        </>
    )
}

export default Hero;