import React, { useState } from 'react';

// Sample avatar images (replace these URLs with actual paths)
// const avatars = [
//     'https://example.com/avatar1.jpg',
//     'https://example.com/avatar2.jpg',
//     'https://example.com/avatar3.jpg',
// ];

function ProfileHeader({ user, setUserAvatar }) {
    //const [selectedAvatar, setSelectedAvatar] = useState(user.profilePic || avatars[0]);

    const initial = user.username.charAt(0).toUpperCase();
    const handleAvatarChange = (avatar) => {
        //setSelectedAvatar(avatar);
        setUserAvatar(avatar);  // Prop function to save avatar selection
    };

    return (
        <div className="flex flex-col items-center space-y-4 p-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg shadow-lg">
            <div className="w-24 h-24 rounded-full border-4 border-white shadow-md flex items-center justify-center text-4xl bg-gray-700"> {/* Background for initial */}
                {initial} {/* Display the initial */}
            </div>
            <h2 className="text-2xl font-bold">{user.first_name +  ' ' + user.last_name}</h2>
            <p>@{user.username}</p>
           
        </div>
    );
}

export default ProfileHeader;
