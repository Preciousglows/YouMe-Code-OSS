import React from "react";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer bg-gray-900 text-white py-6">
            <div className="flex flex-col mx-auto justify-center items-center">
                <p>&copy; 2024 YouMe Code. All rights reserved.</p>
                <nav>
                    <Link to="/about" className="mx-2 hover:border-b-2 hover:border-b-primary">About Us</Link>
                    <Link to="/contact" className="mx-2 hover:border-b-2 hover:border-b-primary">Contact</Link>
                    <Link to="/privacy" className="mx-2 hover:border-b-2 hover:border-b-primary">Privacy Policy</Link>
                </nav>
            </div>
        </footer>
    );
}

export default Footer;