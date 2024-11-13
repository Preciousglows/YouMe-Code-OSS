import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SolutionCommentsPage() {
    const { solutionId } = useParams(); // get solution ID from URL
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");

    const fetchUsernamesForComments = async (comments) => {
        const commentsWithUsernames = await Promise.all(
            comments.map(async (comment) => {
                try {
                    const response = await fetch(`https://youmecode.onrender.com/youmecode/get-user/${comment.user}`);
                    if (response.ok) {
                        const userData = await response.json();
                        console.log("Fetched username:", userData.message.username);

                        return { ...comment, username: userData.message.username };
                    } else {
                        console.error("Failed to fetch user data");
                        return comment;
                    }
                } catch (error) {
                    console.error("Error fetching user:", error);
                    return comment;
                }
            })
        );
        setComments(commentsWithUsernames);
        console.log("Updated comments with usernames:", commentsWithUsernames);
    }
    // Fetch comments when the component mounts
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch(`https://youmecode.onrender.com/youmecode/comment?submission=${solutionId}`);
                if (response.ok) {
                    const data = await response.json();
                    setComments(data.message); // adjust according to API response

                    await fetchUsernamesForComments(data.message);
                }
            } catch (error) {
                console.error("Error fetching comments:", error);
            }
        };
        fetchComments();
    }, [solutionId]);

    // Handle submitting a new comment
    const handleCommentSubmit = async () => {
        if (!newComment.trim()) return;

        try {
            const response = await fetch(`https://youmecode.onrender.com/youmecode/comment/`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ submission: solutionId, description: newComment, user: localStorage.getItem("userId") })
            });
            if (response.ok) {
                const newCommentData = await response.json();
                setComments((prevComments) => [newCommentData, ...prevComments]); // Add new comment at the top
                setNewComment(""); // Clear input
            }
        } catch (error) {
            console.error("Error submitting comment:", error);
        }
    };

    return (
        <div className="comments-page min-h-screen bg-gray-900 text-white p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">Comments</h3>
            
            {/* Comment Form */}
            <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                className="w-full h-24 p-3 bg-gray-800 text-white rounded-lg focus:outline-none mb-4"
            />
            <button
                onClick={handleCommentSubmit}
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-indigo-600 transition"
            >
                Submit Comment
            </button>

            {/* Display Comments */}
            <div className="comments-list mt-6">
                {comments.length > 0 ? (
                    comments.map((comment) => (
                        <div key={comment.id} className="border border-gray-700 p-4 rounded-lg mb-4">
                            <p>{comment.description}</p>
                            <p className="text-sm text-gray-500 mt-2">Sent by: {comment.username || "Anonymous"}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No comments yet. Be the first to comment!</p>
                )}
            </div>
        </div>
    );
}

export default SolutionCommentsPage;
