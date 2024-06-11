import React from 'react';

interface ButtonProps {
    variant: 'orange' | 'green' | 'gray';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, type = 'button', children }) => {
    const baseClasses = 'py-[9px] px-[16px] rounded-lg w-auto text-xs font-normal leading-[14px] hover:brightness-105 active:brightness-95';
    const variants = {
        orange: 'bg-gradient-to-b from-[#E48027] to-[#E53E2E] text-[#FFFFFF]',
        green: 'bg-[#BBFF00] text-[#444444]',
        gray: 'bg-[#FFFFFF]/[.08] text-[#FFFFFF]',
    };

    const classes = `${baseClasses} ${variants[variant]}`;

    return (
        <button onClick={onClick} type={type} className={classes}>
            {children}
        </button>
    );
};

export default Button;