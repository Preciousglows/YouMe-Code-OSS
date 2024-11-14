import React from "react";
import { useState } from "react";

// Challenge Details Component
export default function ChallengeDetails({ challenge }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg md:mx-auto md:w-1/2 shadow-lg mb-6">
            <h2 className="md:text-3xl text-2xl font-bold text-primary mb-4">{challenge.title}</h2>
            <p className={`text-sm font-medium mb-2 ${
                challenge.difficulty === "Easy" ? "text-green-400" :
                challenge.difficulty === "Medium" ? "text-yellow-400" :
                "text-red-400"
            }`}>
                Difficulty: {challenge.difficulty}
            </p>
            <p className="text-gray-300">{challenge.summary}</p>
        </div>
    );
}