import React, { FC, useState } from 'react';

const AchievementsPage: FC = () => {
    const [showAll, setShowAll] = useState(true);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Достижения</h1>
            
            <div className="flex mb-4">
                <button
                    onClick={() => setShowAll(true)}
                    className={`flex-1 py-2 ${showAll ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                    Все
                </button>
            
                <button
                    onClick={() => setShowAll(false)}
                    className={`flex-1 py-2 ${!showAll ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                    Заблокированные
                </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <img src="/path/to/image.jpg" alt="Achievement" className="w-full h-32 object-cover rounded-md" />
            
                    <h3 className="text-lg font-semibold mt-2">Достижение 1</h3>
                </div>
                
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <img src="/path/to/image.jpg" alt="Achievement" className="w-full h-32 object-cover rounded-md" />
                
                    <h3 className="text-lg font-semibold mt-2">Достижение 2</h3>
                </div>
            </div>
        </div>
    );
};

export default AchievementsPage;
