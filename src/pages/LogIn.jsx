import React, { useState } from "react";
import defaultimg from "/assets/defaultimg.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LogIn() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    // LogIn.js

const { login } = useAuth();

const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
        const response = await fetch("https://youmecode.onrender.com/youmecode/token/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem("accessToken", data.access);
            localStorage.setItem("refreshToken", data.refresh);

            await login(data.access);
            navigate("/app");
        } else {
            setError("Invalid username or password.");
        }
    } catch (error) {
        setError("Network error. Please try again later.");
    } finally {
        setIsLoading(false);
    }
};


    return (
        <div className="flex flex-col w-full justify-center items-center">
            <div className="items-center justify-center flex">
                <img src={defaultimg} alt="" className="w-1/2" />
            </div>
            <div className="md:w-[40%]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center bg-white/20 backdrop-blur-md shadow-white rounded-md shadow-xs py-10 px-10">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full ring-0 outline-none shadow-xl text-white bg-transparent border rounded-md px-4 py-2 border-primary"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full ring-0 outline-none shadow-xl text-white bg-transparent border rounded-md px-4 py-2 border-primary"
                    />
                    {error && <p className="text-red-500">{error}</p>}
                    
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`text-white transition ease-in rounded-lg px-6 py-3 border border-transparent ${
                            isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-transparent hover:border hover:border-primary"
                        }`}
                    >
                        {isLoading ? <div className="ease-linear rounded-full border-4 border-t-4 border-t-primary border-gray-200 h-4 w-4  animate-spin "></div> : "Log In"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LogIn;
