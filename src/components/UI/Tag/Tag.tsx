import React from 'react';

interface ButtonProps {
    variant: 'green' | 'red',
    font: 'small',
    className?: string,
    children: React.ReactNode;
}

const Tag: React.FC<ButtonProps> = ({ variant, font, children, className }) => {
    // bg-gray-100 text-gray-800 text-xs
    const baseClasses = `font-medium px-1.5 py-0.5 rounded-full uppercase ${className ? className : undefined}`;

    const variants = {
        green: 'bg-[#BBFF00] text-[#444444]',
        red: 'bg-red-500 text-[#444444]',
    };

    const fonts = {
        small: 'text-[8px]',
    };


    const classes = `${baseClasses} ${variants[variant]} ${fonts[font]}`;

    return (
        <span
            className={classes}
        >
            {children}
        </span>
    );
};

export default Tag;