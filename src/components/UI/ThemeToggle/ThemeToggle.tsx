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
            className="p-2 rounded dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        >
            {/* <img src= alt="" /> */}
            {
                theme === DARK_THEME
                    ? <IconSun />
                    : <IconMoon />
            }

        </button>
    );
};

export default ThemeToggle;