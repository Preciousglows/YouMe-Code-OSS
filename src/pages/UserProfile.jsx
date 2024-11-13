import React, { useState, useEffect } from 'react';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfileStats from '../components/Profile/ProfileStats';
import ChallengeHistory from '../components/Profile/ChallengeHistory';
import Achievements from '../components/Profile/Achievements';

import { useAuth } from '../context/AuthContext';

function UserProfile() {
    const { userId } = useAuth();

    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        date_joined: '',
    });

    const stats = {
        challengesCompleted: 15,
        submissions: 35,
    };

    const challenges = [
        { title: 'Array Sum', dateCompleted: '2023-09-21' },
        { title: 'Binary Search', dateCompleted: '2023-10-05' },
    ];

    // const achievements = ['Top Solver', '10 Challenges Completed', 'Early Bird'];
    useEffect(() => {
        fetchUser();
    }, [userId]);

    const fetchUser = async () => {
        try {
            const response = await fetch(`https://youmecode.onrender.com/youmecode/get-user/${userId}/`);
            if (response.ok) {
                const userData = await response.json();
                setUser({
                    first_name : userData.message.first_name,
                    last_name: userData.message.last_name,
                    username: userData.message.username,
                    email: userData.message.email,
                    date_joined: userData.message.date_joined,
                });
                console.log(userData);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
    const setUserAvatar = (avatar) => {
        setUser((prevUser) => ({ ...prevUser, profilePic: avatar }));
    };

    return (
        <div className="p-8 bg-gray-900 min-h-screen md:mx-auto md:w-1/2 text-gray-200">
            <ProfileHeader user={user} setUserAvatar={setUserAvatar} />
            <div className="mt-8">
                <div className='p-6 flex gap-8 items-center  rounded-lg bg-gray-800 shadow-lg hover:shadow-xl transition'>
                    <h2 className="text-2xl font-bold mb-4">Profile</h2>

                    <div className='flex flex-col gap-2 h-full w-full'>
                        <p className="text-gray-300 mb-2 w-full bg-blue-600 font-semibold rounded-lg p-2">Email: 
                            <span className='text-sm font-normal'> {user.email}</span> 
                        </p>
                        <p className="text-gray-300 mb-2 w-full bg-green-600 font-semibold rounded-lg p-2">Date Joined: 
                            <span className='text-sm font-normal'> {user.date_joined.split('T')[0]} </span></p>
                    </div>

                </div>

                {/* <ProfileStats stats={stats} /> */}
                {/* <ChallengeHistory challenges={challenges} /> */}
                {/* <Achievements achievements={achievements} /> */}
            </div>
        </div>
    );
}

export default UserProfile;
