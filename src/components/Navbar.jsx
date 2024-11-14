import { Link, useNavigate } from "react-router-dom";
import defaultimg from '/assets/defaultimg.svg';

import { useEffect } from "react";

function Navbar() {
    const navigate = useNavigate();

    return (
        <>
        <nav className=" px-7 md:px-20  flex justify-between items-center backdrop-blur-lg bg-white/25 border-b border-primary">
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

        <div className="dropdown dropdown-end md:hidden">
          <div tabIndex={0} role="button" className="btn m-1 border-primary bg-transparent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#33cccc" className="size-6">
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>

          </div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li>
              <Link to="/login">
                <button>
                  Log In
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button>
                  Sign Up
                </button>
                </Link>
              </li>
          </ul>
        </div>


        </nav>
        </>
    )
}

export default Navbar;