import React from "react";
import { useState } from "react";

// Code Editor Component

export function CodeEditor({ onSubmit }) {
    const [code, setCode] = useState("");

    const handleCodeChange = (e) => setCode(e.target.value);
    const handleSubmit = () => {
        if (code.trim()) {
            onSubmit(code);
            setCode(""); // Clear input after submission
        }
    };

    return (
        <div className="code-editor bg-gray-800 p-6 rounded-lg md:w-1/2 md:mx-auto shadow-lg mb-6">
            <h3 className="text-xl font-semibold text-primary mb-4">Your Solution</h3>
            <textarea
                value={code}
                onChange={handleCodeChange}
                placeholder="Write your code here..."
                className="w-full h-40 p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
            />
            <button
                onClick={handleSubmit}
                className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-600 transition"
            >
                Submit Solution
            </button>
        </div>
    );
}
