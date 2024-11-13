import React from 'react';

function Achievements({ achievements }) {
    return (
        <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg mt-6">
            <h3 className="text-xl font-semibold mb-4">Achievements</h3>
            <div className="flex flex-wrap gap-2 mt-2">
                {achievements.map((achievement, index) => (
                    <span
                        key={index}
                        className="bg-purple-800 text-purple-200 rounded-full px-4 py-1 text-sm shadow-md"
                    >
                        {achievement}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default Achievements;
