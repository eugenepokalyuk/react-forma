import React from 'react';

interface ButtonProps {
    variant: 'orange' | 'green' | 'gray' | 'ghost';
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    className?: string,
    children: React.ReactNode;
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, type = 'button', children, className, disabled }) => {
    const baseClasses = `py-[9px] px-[16px] rounded-lg w-auto text-xs font-normal leading-[14px] hover:brightness-105 active:brightness-95 ${className ? className : undefined}`;
    const variants = {
        orange: 'bg-gradient-to-b from-[#E48027] to-[#E53E2E] text-[#FFFFFF]',
        green: 'bg-[#BBFF00] text-[#444444]',
        gray: 'dark:bg-[#FFFFFF]/[.08] bg-[#000000]/[.06] dark:text-[#FFFFFF] text-[#444444]',
        ghost: 'dark:text-[#FFFFFF]/[.56] text-[#444444]'
    };

    const classes = `${baseClasses} ${variants[variant]}`;

    return (
        <button onClick={onClick} type={type} className={classes} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;