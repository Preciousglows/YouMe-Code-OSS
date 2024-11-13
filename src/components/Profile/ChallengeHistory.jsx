import React from 'react';

function ChallengeHistory({ challenges }) {
    return (
        <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg mt-6">
            <h3 className="text-xl font-semibold mb-4">Challenge History</h3>
            <ul className="space-y-3">
                {challenges.map((challenge, index) => (
                    <li key={index} className="bg-gray-700 p-4 rounded-lg shadow-md">
                        <p className="font-medium text-white">{challenge.title}</p>
                        <p className="text-sm text-gray-400">{challenge.dateCompleted}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChallengeHistory;
