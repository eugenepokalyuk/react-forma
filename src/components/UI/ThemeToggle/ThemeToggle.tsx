import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

// import { DARK_THEME } from '../../../utils/consts';

const ThemeToggle: React.FC = () => {
    const { toggleTheme } = useTheme();

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" onClick={toggleTheme} />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#49288A] dark:peer-focus:ring-[#49288B] rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#49288A]"></div>
            {/* <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {theme === DARK_THEME
                    ? "Темная"
                    : "Светлая"
                }
            </span> */}
        </label>
    );
};

export default ThemeToggle;