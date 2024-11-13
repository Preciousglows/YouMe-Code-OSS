import React from "react";
import { useState } from "react";

// Post Form Component for creating new posts
function PostForm({ onCreatePost }) {
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (content.trim()) {
            onCreatePost({ id: Date.now(), user: "You", content, likes: 0, comments: 0 });
            setContent("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-800 md:w-1/2 md:mx-auto p-6 rounded-lg shadow-md mb-6">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Share something with the community..."
                className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none"
                rows="3"
            />
            <button type="submit" className="mt-4 px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-600 transition">
                Post
            </button>
        </form>
    );
}

export default PostForm;