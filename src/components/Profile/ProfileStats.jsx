import React from 'react';

function ProfileStats({ stats }) {
    return (
        <div className="grid grid-cols-2 gap-4 text-center text-white">
            <div className="bg-blue-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold">{stats.challengesCompleted}</h3>
                <p className="text-sm text-blue-200">Challenges Completed</p>
            </div>
            <div className="bg-green-600 p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                <h3 className="text-2xl font-bold">{stats.submissions}</h3>
                <p className="text-sm text-green-200">Submissions</p>
            </div>
        </div>
    );
}

export default ProfileStats;
