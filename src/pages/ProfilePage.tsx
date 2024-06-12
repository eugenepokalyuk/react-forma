import React from 'react';
import ThemeToggle from '../components/UI/ThemeToggle/ThemeToggle';

const ProfilePage: React.FC = () => {
    return (
        <div>
            <div className='relative bg-gradient-to-b dark:from-[#49288A] from-[#0B8E21] dark:to-[#49288B] to-[#11D532] pb-6 rounded-3xl overflow-hidden h-96'>
                <div className="absolute top-0 left-0 w-full h-full z-10">
                    <div className="fish animate-fish"></div>
                </div>
                <div className="relative z-20">
                    <div className="flex items-center justify-between p-4">
                        <p className='text-xl leading-6 font-medium text-[#FFFFFF]'>Сменить тему</p>
                        <ThemeToggle />
                    </div>
                </div>

                <div className="relative z-20">
                    <div className="flex items-center justify-between p-4">
                        <p className='text-xl leading-6 font-medium text-[#FFFFFF]'>Сменить язык</p>
                        <button
                            className="flex justify-center items-center rounded-full dark:bg-gray-800 bg-gray-800 text-gray-800 dark:text-gray-200 size-8"
                        >
                            RU
                        </button>
                    </div>
                </div>

                <div className="relative z-20">
                    <div className="flex items-center justify-between p-4">
                        <p className='text-xl leading-6 font-medium text-[#FFFFFF]'>Сменить пол</p>
                        <button
                            className="flex justify-center items-center rounded-full dark:bg-gray-800 bg-gray-800 text-gray-800 dark:text-gray-200 size-8"
                        >
                            Ж
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;