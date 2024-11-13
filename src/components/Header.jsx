import React from "react";
import { Link } from "react-router-dom";
import defaultimg from "/assets/defaultimg.svg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Header Component with User Profile
export default function Header() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const handleLogout = () => {
        logout();
        navigate("/login");
    }
    return (
        <nav className="flex justify-between items-center px-16 bg-gray-800 text-white shadow-lg">
            <Link to="/" className="text-2xl font-bold text-primary">
                <img src={defaultimg} alt="" className="w-1/3" />
            </Link>
            <div className="flex items-center gap-6">
                <Link to="/app" className="hover:text-primary">Challenges</Link>
                {/* <Link to="leaderboard" className="hover:text-primary">Leaderboard</Link> */}
                {/* <Link to="community" className="hover:text-primary">Community</Link> */}
                <Link to="profile" className="hover:text-primary">Profile</Link>
                <button onClick={handleLogout} className="hover:text-primary">
                    Log Out
                </button>
            </div>
        </nav>
    );
}