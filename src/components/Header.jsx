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
        <nav className="flex justify-between items-center px-4 md:px-16 bg-gray-800 text-white shadow-lg">
            <Link to="/" className="text-2xl font-bold text-primary">
                <img src={defaultimg} alt="" className="w-1/3" />
            </Link>
            <div className="flex items-center gap-6">
                <Link to="/app" className="hidden md:block hover:text-primary">Challenges</Link>
                {/* <Link to="leaderboard" className="hover:text-primary">Leaderboard</Link> */}
                {/* <Link to="community" className="hover:text-primary">Community</Link> */}
                <Link to="profile" className="hidden md:block hover:text-primary">Profile</Link>
                <button onClick={handleLogout} className="hidden md:block hover:text-primary">
                    Log Out
                </button>
            </div>

            
            <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn m-1 border-primary bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#33cccc" className="size-6">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>

          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-gray-800 rounded-box z-[1] w-52 p-2 shadow">
            <li>
            <Link to="/app" className="hover:text-primary">Challenges</Link>
            </li>
            <li>
            <Link to="profile" className="hover:text-primary">Profile</Link>
            </li>

            <li>
            <button onClick={handleLogout} className="hover:text-primary">
                    Log Out
                </button>
            </li>
          </ul>
        </div>
        </nav>
    );
}