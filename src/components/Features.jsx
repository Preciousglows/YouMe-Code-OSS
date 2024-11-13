import React from "react";
import target from "/assets/target.png"
import bulb from "/assets/bulb.png"
import community from "/assets/community.png"

function Features() {
    return (
        <div className="features-section py-10 bg-gray-400 text-white">
            <h2 className="text-center text-3xl font-bold my-8 text-gray-8">Platform Highlights</h2>
            <div className="flex flex-wrap justify-center gap-8">
                <div className="feature-card py-10 px-6 max-w-sm rounded-md shadow-gray-800 shadow-md bg-gray-800">
                    <img src={target} alt="" />
                    <h3 className="text-xl font-semibold my-3">Post Challenges</h3>
                    <p>Share coding challenges and test the skills of other coders.</p>
                </div>
                <div className="feature-card py-10 px-6 max-w-sm rounded-md shadow-gray-800 shadow-md bg-gray-800">
                    <img src={bulb} alt="" />
                    <h3 className="text-xl font-semibold my-3">Submit Solutions</h3>
                    <p>Upload your solutions, review others, and improve your skills.</p>
                </div>
                <div className="feature-card py-10 px-6 max-w-sm rounded-md shadow-gray-800 shadow-md bg-gray-800">
                    <img src={community} alt="" />
                    <h3 className="text-xl font-semibold my-3">Community Feedback</h3>
                    <p>Get valuable feedback from peers to enhance your code quality.</p>
                </div>
            </div>
        </div>
    );
}

export default Features;
