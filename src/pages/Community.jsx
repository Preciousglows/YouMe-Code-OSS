import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PostCard from '../components/Community/PostCard';
import PostForm from '../components/Community/PostForm';

// Sample posts data
const samplePosts = [
    { id: 1, user: "Alice", content: "What's the best way to learn React?", likes: 12, comments: 3 },
    { id: 2, user: "Bob", content: "Check out this cool sorting algorithm I found!", likes: 8, comments: 1 },
    { id: 3, user: "Charlie", content: "Anyone else struggling with async/await?", likes: 15, comments: 5 },
];


// Main Community Page Component
function Community() {
    const [posts, setPosts] = useState([]);

    // Set initial posts (this would come from an API in a real implementation)
    useEffect(() => {
        setPosts(samplePosts);
    }, []);

    // Function to add a new post
    const handleCreatePost = (newPost) => {
        setPosts([newPost, ...posts]);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold text-center mb-10 text-primary">Community</h1>

            {/* Post Form for adding new posts */}
            <PostForm onCreatePost={handleCreatePost} />

            {/* Posts Feed */}
            <div className="posts-feed mx-auto w-full max-w-2xl">
                {posts.length > 0 ? (
                    posts.map((post) => <PostCard key={post.id} post={post} />)
                ) : (
                    <p className="text-center text-gray-400">No posts yet. Be the first to share something!</p>
                )}
            </div>
        </div>
    );
}

export default Community;
