import React from "react";

export default function Testimonials() {
    return (
        <div className="testimonials-section bg-white text-primary py-20">
            <h2 className="text-center text-3xl font-bold my-8">What Our Users Say</h2>
            <div className="flex flex-col md:flex-row md:gap-10 px-7 md:p-0 justify-center gap-8">
                <blockquote className="testimonial max-w-md border-2 shadow-gray-200 shadow-md rounded-md flex flex-col gap-5 px-5 py-6">
                    <p>"YouMe Code has helped me improve my coding skills significantly!"</p>
                    <footer>– Alex, Web Developer</footer>
                </blockquote>
                <blockquote className="testimonial max-w-md border-2 shadow-gray-200 shadow-md rounded-md flex flex-col gap-5 px-5 py-6">
                    <p>"A great platform to learn and grow with a supportive community."</p>
                    <footer>– Priya, Software Engineer</footer>
                </blockquote>
            </div>
        </div>
    );
}
