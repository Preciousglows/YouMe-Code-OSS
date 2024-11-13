import React, { useState, useEffect } from 'react';

// Sample user data (replace with API data in a real implementation)
const sampleUsers = [
    { id: 1, name: "Alice", profilePic: "https://example.com/avatar1.jpg", score: 150, challengesCompleted: 20 },
    { id: 2, name: "Bob", profilePic: "https://example.com/avatar2.jpg", score: 120, challengesCompleted: 18 },
    { id: 3, name: "Charlie", profilePic: "https://example.com/avatar3.jpg", score: 110, challengesCompleted: 15 },
    { id: 4, name: "Daisy", profilePic: "https://example.com/avatar4.jpg", score: 90, challengesCompleted: 12 },
];

function Leaderboard() {
    const [users, setUsers] = useState([]);
    const [sortOption, setSortOption] = useState("Score");

    // Fetch and set user data
    useEffect(() => {
        setUsers(sampleUsers);
    }, []);

    // Sort users based on the selected option
    const sortedUsers = [...users].sort((a, b) => {
        if (sortOption === "Score") return b.score - a.score;
        if (sortOption === "Challenges") return b.challengesCompleted - a.challengesCompleted;
        return 0;
    });

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold text-center mb-10 text-primary">Leaderboard</h1>
            
            {/* Sorting Filter */}
            <div className="flex justify-center mb-6">
                <select
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className=" bg-gray-700  p-3 rounded-lg  text-white font-semibold focus:outline-none"
                >
                    <option value="Score">Top Score</option>
                    <option value="Challenges">Most Challenges Completed</option>
                </select>
            </div>

            {/* Leaderboard List */}
            <div className="leaderboard-list mx-auto w-full max-w-2xl">
                {sortedUsers.map((user, index) => (
                    <div
                        key={user.id}
                        className="flex items-center justify-between p-4 bg-gray-800 rounded-lg shadow-md mb-4 hover:bg-gray-700 transition"
                    >
                        {/* Rank */}
                        <div className="flex items-center">
                            <div className="text-2xl font-bold text-gray-400 mr-4">{index + 1}</div>
                            <img
                                src={user.profilePic}
                                alt={`${user.name} profile`}
                                className="w-12 h-12 rounded-full border-2 border-primary"
                            />
                            <div className="ml-4">
                                <p className="text-lg font-semibold">{user.name}</p>
                                <p className="text-sm text-gray-400">Challenges: {user.challengesCompleted}</p>
                            </div>
                        </div>
                        {/* Score */}
                        <div className="text-right">
                            <p className="text-xl font-bold text-primary">{user.score} pts</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Leaderboard;
