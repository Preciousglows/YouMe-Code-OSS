import React from 'react';
import { Link } from 'react-router-dom';

// Post Card Component to display individual posts
 function PostCard({ post }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-6 transition hover:bg-gray-700">
            <div className="flex items-center mb-4">
                <div className="bg-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold">
                    {post.user.charAt(0)}
                </div>
                <p className="ml-4 text-lg font-bold text-white">{post.user}</p>
            </div>
            <p className="text-gray-300 mb-4">{post.content}</p>
            <div className="flex justify-between items-center">
                <button className="text-primary hover:text-indigo-200 transition">Like ({post.likes})</button>
                <Link to={`/community/post/${post.id}`} className="text-primary hover:text-indigo-200 transition">
                    Comments ({post.comments})
                </Link>
            </div>
        </div>
    );
}

export default PostCard;