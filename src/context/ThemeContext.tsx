import React, { createContext, useContext, useEffect, useState } from 'react';
import { DAEFAUL_THEME, DARK_THEME, THEME } from '../utils/consts';

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem(THEME);
        return savedTheme ? savedTheme : DAEFAUL_THEME;
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === DAEFAUL_THEME ? DARK_THEME : DAEFAUL_THEME));
    };

    useEffect(() => {
        localStorage.setItem(THEME, theme);

        const root = document.documentElement;
        if (theme === DARK_THEME) {
            root.classList.add(DARK_THEME);
        } else {
            root.classList.remove(DARK_THEME);
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export { ThemeProvider, useTheme };
