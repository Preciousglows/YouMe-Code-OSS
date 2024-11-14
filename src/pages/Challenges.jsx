import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ChallengeCard({ challenge }) {
    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-primary mb-2">{challenge.title}</h3>
            <p className={`text-sm font-medium ${
                challenge.difficulty === "Easy" ? "text-green-400" :
                challenge.difficulty === "Medium" ? "text-yellow-400" :
                "text-red-400"
            }`}>
                {challenge.difficulty}
            </p>
            <p className="text-gray-300 my-5">{challenge.summary}</p>
            <Link 
                to={{
                    pathname: `/app/challenges/${challenge.id}`,
                    state: { challenge },
                }}
                className="text-primary mt-3 inline-block font-semibold hover:underline"
            >
                View Challenge &rarr;
            </Link>
        </div>
    );
}

function Filters({ filter, setFilter, sort, setSort }) {
    return (
        <div className="filters flex justify-center gap-4 mb-6">
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 bg-gray-700 text-white rounded-lg">
                <option value="All">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="p-2 bg-gray-700 text-white rounded-lg">
                <option value="Newest">Newest</option>
                <option value="Popular">Most Popular</option>
                <option value="Top Rated">Top Rated</option>
            </select>
        </div>
    );
}

function Challenges() {
    const [challenges, setChallenges] = useState([]);
    const [filter, setFilter] = useState("All");
    const [sort, setSort] = useState("Newest");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchChallenges = async () => {
            try {
                setIsLoading(true);
                const response = await fetch("https://youmecode.onrender.com/youmecode/challenge/");
                if (response.ok) {
                    const data = await response.json();
                    setChallenges(Array.isArray(data.message) ? data.message : []);
                }
            } catch (error) {
                console.error("Error fetching challenges:", error);
            } finally {
                setIsLoading(false);
            }
        };
    
        fetchChallenges();
    }, []);

    const displayedChallenges = challenges
    .filter((challenge) => filter === "All" || challenge.difficulty === filter)
    .sort((a, b) => {
      if (sort === "Newest") {
        return new Date(b.created_at) - new Date(a.created_at);
      }
      if (sort === "Popular") {
        return b.submission_count - a.submission_count;
      }
      return a.difficulty.localeCompare(b.difficulty);
    });

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            <div className="flex justify-between items-center mb-10">
                <h1 className="md:text-4xl text-2xl font-bold text-primary">Challenges</h1>
                <Link
                    to="/app/create-challenge"
                    className="bg-primary text-white md:text-lg text-xs px-2 font-semibold md:px-4 py-2 rounded-lg hover:bg-indigo-600 transition"
                >
                    Create Challenge
                </Link>
            </div>

            <Filters filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} />

            {isLoading ? (
                <div className="ease-linear rounded-full border-4 mx-auto mt-10 border-t-4 border-t-primary border-gray-200 h-5 w-5  animate-spin "></div>
            ) : (
                <div className="challenge-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedChallenges.length > 0 ? (
                        displayedChallenges.map((challenge) => (
                            <ChallengeCard key={challenge.id} challenge={challenge} />
                        ))
                    ) : (
                        <p className="text-center col-span-full text-gray-500">No challenges found.</p>
                    )}
                </div>
            )}
        </div>
    );
}

export default Challenges;
