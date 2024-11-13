import React, { useState, useEffect, } from "react";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Assuming user ID is in AuthContext

import { CodeEditor } from "../components/CodeEditor";
import ChallengeDetails from "../components/ChallengeDetails";

function ChallengeDetailsPage() {
    const { challengeId } = useParams();
    const location = useLocation();
    const [challenge, setChallenge] = useState(location.state?.challenge || null);
    const [solutions, setSolutions] = useState([]);
    const { userId } = useAuth(); // Get the user ID from context

    const fetchUsernamesForSubmissions = async (submissions) => {
        const submissionsWithUsernames = await Promise.all(
            submissions.map(async (submission) => {
                try {
                    const response = await fetch(`https://youmecode.onrender.com/youmecode/get-user/${submission.user}`);
                    if (response.ok) {
                        const userData = await response.json();
                        console.log("Fetched username:", userData.message.username);

                        return { ...submission, username: userData.message.username };
                    } else {
                        console.error("Failed to fetch user data");
                        return { ...submission, username: "Unknown" };
                    }
                } catch (error) {
                    console.error("Error fetching user:", error);
                    return { ...submission, username: "Unknown" };
                }
            })
        );
        setSolutions(submissionsWithUsernames);
        console.log("Updated solutions with usernames:", submissionsWithUsernames);

    };

    useEffect(() => {
        
        const fetchChallengeById = async () => {
            try {
                const response = await fetch(`https://youmecode.onrender.com/youmecode/get-challenge/${challengeId}`);
                if (response.ok) {
                    const data = await response.json();
                    setChallenge(data.message);
                }
            } catch (error) {
                console.error("Error fetching challenge details:", error);
            }
        };

        const fetchSolutions = async () => {
            try {
                const response = await fetch(`https://youmecode.onrender.com/youmecode/submission/?challenge=${challengeId}`);
                if (response.ok) {
                    const data = await response.json();
                    const submissions = Array.isArray(data.message) ? data.message : [];
                    await fetchUsernamesForSubmissions(submissions);
                }
            } catch (error) {
                console.error("Error fetching solutions:", error);
            }
        };

        if (!challenge) fetchChallengeById();
        fetchSolutions();
    }, [challengeId, challenge]);

    const handleSolutionSubmit = async (code) => {
        try {
            const response = await fetch("https://youmecode.onrender.com/youmecode/submission/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    challenge: challengeId,
                    description: code,
                    user: userId,
                }),
            });

            if (response.ok) {
                const newSolution = { code, username: "You" }; // You can modify based on response data
                setSolutions([newSolution, ...solutions]);
            } else {
                console.error("Failed to submit solution");
            }
        } catch (error) {
            console.error("Error submitting solution:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-8">
            {challenge ? (
                <ChallengeDetails challenge={challenge} />
            ) : (
                <p>Loading challenge details...</p>
            )}
            <CodeEditor onSubmit={handleSolutionSubmit} />
            <div className="submitted-solutions md:mx-auto md:w-1/2 bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-primary mb-4">Other Solutions</h3>
                {solutions.length > 0 ? (
                    solutions.map((solution, index) => (
                        <div key={index} className="border border-gray-700 p-4 rounded-lg mb-4">
                            <p className="text-gray-300">{solution.description || solution.code}</p>
                            <p className="text-sm text-gray-500 mt-2">Submitted by: {solution.username || "Anonymous"}</p>
                            <Link to={`/app/challenges/${challengeId}/solutions/${solution.id}/comments`} className="text-primary hover:underline">
                                View Comments
                            </Link>

                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No solutions submitted yet. Be the first to submit one!</p>
                )}
            </div>
        </div>
    );
}

export default ChallengeDetailsPage;
