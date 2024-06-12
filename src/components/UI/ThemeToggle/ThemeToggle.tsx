import React from 'react';
import { useTheme } from '../../../context/ThemeContext';

import { ReactComponent as IconMoon } from '../../../assets/icons/theme/moon.svg';
import { ReactComponent as IconSun } from '../../../assets/icons/theme/sun.svg';
import { DARK_THEME } from '../../../utils/consts';

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex justify-center items-center rounded-full dark:bg-gray-800 bg-gray-800 text-gray-800 dark:text-gray-200 size-8"
        >
            {theme === DARK_THEME
                ? <IconSun />
                : <IconMoon />
            }

        </button>
    );
};

export default ThemeToggle;