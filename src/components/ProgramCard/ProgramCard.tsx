import React from 'react';
import Button from '../UI/Button/Button';
import Tag from '../UI/Tag/Tag';

interface ProgramCardProps {
    title: string;
    description: string;
    isLocked: boolean;
    isFree: boolean;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ title, description, isLocked, isFree }) => {
    return (
        <div className={`bg-[#111111]/[.16] p-3 space-y-2 rounded-xl ${isLocked ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <div className="flex flex-row justify-between items-start">
                <h3 className='text-lg leading-6 font-medium dark:text-[#FFFFFF] text-[#444444]'>{title}</h3>
                {isLocked && <Tag className='bg-red-500 text-[8px] !text-[#FFFFFF] font-semibold'>Заблокировано</Tag>}
                {isFree && <Tag className='bg-green-500 text-[8px] !text-[#FFFFFF] font-semibold'>Бесплатно</Tag>}
            </div>
            <p className='text-sm leading-[18px] font-normal dark:text-[#FFFFFF]/[.56] text-[#444444]'>{description}</p>
            <div>
                <Button variant='gray' className='w-full' disabled={isLocked}>Начать</Button>
            </div>
        </div>
    );
};

export default ProgramCard;