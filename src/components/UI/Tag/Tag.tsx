import React from 'react';

interface ButtonProps {
    className?: string,
    children: React.ReactNode;
}

const Tag: React.FC<ButtonProps> = ({ children, className }) => {
    const baseClasses = `bg-gray-100 text-gray-800 text-xs font-medium px-1.5 py-0.5 rounded-full uppercase ${className ? className : undefined}`;
    const classes = `${baseClasses}`;

    return (
        <span
            className={classes}
        >
            {children}
        </span>
    );
};

export default Tag;