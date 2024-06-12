import React from 'react';
import ThemeToggle from '../components/UI/ThemeToggle/ThemeToggle';

const ProfilePage: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <div className="flex items-center justify-between mb-4">
                <span>Toggle Theme:</span>
                <ThemeToggle />
            </div>
            <div className="mt-4 space-y-2">
                <div className="text-lg">Name: John Doe</div>
                <div className="text-lg">Email: john.doe@example.com</div>
            </div>
        </div>
    );
};

export default ProfilePage;