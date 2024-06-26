/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

interface IconBoltProps {
    percentage: number;
    color: string;
}

const IconBolt: React.FC<IconBoltProps> = ({ percentage, color }) => {
    const height = 48;
    const width = 48;

    // const fillHeight = (percentage / 100) * height;
    if (percentage) {
        console.log(percentage)
    }

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 -960 960 960"
            width={width}
            fill={color}
        >
            <path
                d="m440-380-237-30q-25-3-32.5-27t10.5-41l409-392q5-5 12-7.5t19-2.5q20 0 30.5 17t.5 35L520-580l237 30q25 3 32.5 27T779-482L370-90q-5 5-12 7.5T339-80q-20 0-30.5-17t-.5-35l132-248Z"
            />
        </svg>
    );
};

export default IconBolt;