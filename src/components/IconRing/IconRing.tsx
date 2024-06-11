import React from 'react';

interface IconRingProps {
    percentage: number;
    color: string;
}

const IconRing: React.FC<IconRingProps> = ({ percentage, color }) => {
    const radius = 18;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <svg width="48" height="48" viewBox="0 0 48 48">
            <circle
                cx="24"
                cy="24"
                r={radius}
                fill="transparent"
                stroke="#FFFFFF29"
                strokeWidth="5"
                strokeDasharray={circumference}
                strokeDashoffset={0}
            />
            <circle
                cx="24"
                cy="24"
                r={radius}
                fill="transparent"
                stroke={color}
                strokeWidth="5"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
            />
        </svg>
    );
};

export default IconRing;