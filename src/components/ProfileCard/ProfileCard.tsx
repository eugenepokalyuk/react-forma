import React from 'react';
import userPhoto from '../../assets/images/user-photo-2.jpg';
import Button from '../UI/Button/Button';
import Tag from '../UI/Tag/Tag';

interface ProfileCardProps {
    name: string;
    tag: string;
    description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, tag, description }) => {
    return (
        <div className='bg-[#111111]/[.16] p-3 space-y-2 rounded-xl'>
            <div className="grid grid-cols-10 rounded-xl">
                <div className='col-span-2'>
                    <img src={userPhoto} alt="User" className="w-12 h-12 rounded-full border-2 border-[#BBFF00] object-cover" />
                </div>
                <div className='w-full col-span-8'>
                    <div className='flex flex-row justify-between items-center'>
                        <h3 className='text-lg leading-6 font-medium dark:text-[#FFFFFF] text-[#444444] flex items-center gap-x-2'>{name}</h3>
                        <Tag variant={'green'} font={'small'} className='font-semibold'>{tag}</Tag>
                    </div>
                    <p className='text-sm leading-[18px] font-normal dark:text-[#FFFFFF]/[.56] text-[#444444]'>{description}</p>
                </div>
            </div>
            <div>
                <Button variant='gray' className='w-full'>Узнать больше</Button>
            </div>
        </div>
    );
};

export default ProfileCard;