import React from "react";
import adduser from "/assets/adduser.png";
import explore from "/assets/explore.png";
import checked from "/assets/checked.png";
export default function GettingStarted() {
    return (
        <div className="getting-started-section pt-10 pb-20 bg-gray-700 text-white">
            <h2 className="text-center text-3xl font-bold px-4 md:p-0 my-10">Getting Started is Easy</h2>
            <div className="flex flex-col md:flex-row w-4/5 md:w-3/4 mx-auto justify-center gap-10">
                <div className="step flex flex-col justify-center items-center md:items-start ">
                    <img src={adduser} alt="" />
                    <h3 className="text-xl text-center md:text-left font-semibold my-4">1. Sign Up</h3>
                    <p className="text-center md:text-left">Create an account to join the community.</p>
                </div>
                <div className="step flex flex-col justify-center items-center md:items-start ">
                    <img src={explore} alt="" />
                    <h3 className="text-xl text-center md:text-left font-semibold my-4">2. Explore Challenges</h3>
                    <p className="text-center md:text-left">Find challenges that match your interests and skill level.</p>
                </div>
                <div className="step flex flex-col justify-center items-center md:items-start">
                    <img src={checked} alt="" />
                    <h3 className="text-xl text-center md:text-left font-semibold my-4">3. Submit Solutions</h3>
                    <p className="text-center md:text-left">Share your solutions, get feedback, and improve.</p>
                </div>
            </div>
        </div>
    );
}
