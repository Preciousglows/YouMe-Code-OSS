import { Link, useNavigate } from "react-router-dom";
import defaultimg from '/assets/defaultimg.svg';

import { useEffect } from "react";

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
        <nav className=" px-7 md:px-20  flex justify-between  backdrop-blur-lg bg-white/25 border-b border-primary">
            <div className="">
                <img src={defaultimg} className="w-1/3" alt="Logo" />

            </div>

            <div className="md:flex gap-2  items-center hidden">
          <Link to="/login">
            <button className="text-white transition ease-in rounded-lg px-6 py-3 hover:bg-primary border border-transparent  ">
              Log In
            </button>
          </Link>

          <Link to="/signup">
            <button className="text-white transition ease-in rounded-lg px-6 py-3 border border-transparent bg-primary hover:bg-transparent hover:border hover:border-primary">
              Sign Up
            </button>
          </Link>

        </div>


        </nav>
        </>
    )
}

export default Navbar;