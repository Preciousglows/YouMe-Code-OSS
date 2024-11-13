// CreateChallengePage.js

import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function CreateChallengePage() {
    const { userId } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [difficulty, setDifficulty] = useState("Easy");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const newChallenge = {
            title,
            summary: description,
            difficulty,
            user: userId, // Use userId from AuthContext
        };

        try {
            const response = await fetch("https://youmecode.onrender.com/youmecode/challenge/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(newChallenge),
            });

            if (response.ok) {
                navigate("/app");
            } else {
                console.error("Failed to create challenge");
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
        <h1 className="text-4xl md:text-center font-bold text-primary mb-6">Create a New Challenge</h1>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 md:w-1/2 md:mx-auto rounded-lg shadow-lg space-y-4">
            <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-3 bg-gray-700 text-white rounded-lg"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full h-32 p-3 bg-gray-700 text-white rounded-lg"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium mb-1">Difficulty</label>
                <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full p-3 bg-gray-700 text-white rounded-lg"
                >
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>
            </div>

            <button
                type="submit"
                disabled={isLoading}
                className={`bg-primary text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition w-full 
                    ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-transparent hover:border hover:border-primary"}`}
            >

{isLoading ? <div className="ease-linear rounded-full border-4 border-t-4 mx-auto border-t-primary border-gray-200 h-4 w-4  animate-spin "></div> : "Create Challenge"}
            </button>
        </form>
    </div>
    
    );
}

export default CreateChallengePage;
