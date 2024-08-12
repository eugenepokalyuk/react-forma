import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Modal from '../Modal/Modal';
import Button from '../UI/Button/Button';
import { ReactComponent as IconExperian } from '../../assets/icons/hero-experian.svg';
import { ReactComponent as IconStarV2 } from '../../assets/icons/star_v2.svg';
import { ReactComponent as IconProfile } from '../../assets/icons/user.svg';

const UserInfo = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="px-4 pt-4 text-white rounded-lg">
            <div className="flex items-center justify-between space-x-2 mb-12">
                <div className="flex items-center">
                    <button className="relative text-xl font-bold size-[32px] select-none" onClick={openModal}>
                        <IconExperian className='size-full' />
    
                        <h3 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-full text-[#000000] text-sm -tracking-widest'>3</h3>
                    </button>
                </div>

                <div className="flex items-center justify-start flex-1 bg-[#FFFFFF]/[.08] p-1 rounded-full">
                    <div className="bg-gradient-to-r from-[#BBFF00] to-[#FF8A01] h-3.5 rounded-full" style={{ width: '40%' }}></div>
                </div>

                <div className="flex items-center space-x-2">
                    <button className="text-white bg-[#FFFFFF] bg-opacity-[0.08] size-[32px] rounded-full" onClick={openModal}>
                        <IconStarV2 className='size-full p-1.5' />
                    </button>

                    <NavLink
                        to="/profile"
                        className="text-white bg-[#FFFFFF] bg-opacity-[0.08] size-[32px] rounded-full"
                    >
                        <IconProfile className='size-full' />
                    </NavLink>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center w-full mb-[38px]'>
                <div className="flex justify-center items-center mb-4 whitespace-nowrap">
                    <button className="uppercase rounded-full border border-[#FFFFFF]/[.2] text-[#FFFFFF] tracking-widest text-[10px] leading-[10px] font-medium px-2.5 py-1.5">
                        ЦЕЛЬ — ПОХУДЕТЬ ДО 96 КГ
                    </button>
                </div>

                <div className='flex flex-col justify-center items-center text-center w-[226px] space-y-2'>
                    <h1 className="text-[28px] leading-7 font-normal">План на сегодня выполнен на 40%</h1>
                    
                    <p className="text-sm leading-[18px] font-normal text-[#FFFFFF]/[.56]">План обновляется каждый день исходя из вашей активности</p>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-base font-medium leading-[18px] text-[#FFFFFF] mb-4">Модалка шапки</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-xs font-normal leading-[14px] text-[#FFFFFF]/[.32] mb-1" htmlFor="title">Название</label>
                        
                        <input type="text" id="title" name="title" className="w-full p-2 rounded-lg bg-[#2C2C2E] text-white" />
                    </div>
                    
                    <div>
                        <label className="block text-xs font-normal leading-[14px] text-[#FFFFFF]/[.32] mb-1" htmlFor="unit">Единица измерения</label>
                        
                        <select id="unit" name="unit" className="w-full p-2 rounded-lg bg-[#2C2C2E] text-white">
                            <option value="ккал">ккал</option>
                        
                            <option value="мл">мл</option>
                            
                            <option value="шаги">шаги</option>
                        </select>
                    </div>
                    
                    <div>
                        <label className="block text-xs font-normal leading-[14px] text-[#FFFFFF]/[.32] mb-1" htmlFor="score">Количество</label>
                    
                        <input type="number" id="score" name="score" className="w-full p-2 rounded-lg bg-[#2C2C2E] text-white" />
                    </div>
                    
                    <div className="flex justify-end gap-x-2">
                        <Button variant="gray" onClick={closeModal}>Закрыть</Button>
                    
                        <Button variant="green" type="submit">Добавить</Button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default UserInfo;
