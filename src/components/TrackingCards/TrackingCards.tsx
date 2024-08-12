import { useState } from 'react';

import { useTheme } from '../../context/ThemeContext';
import { DARK_THEME } from '../../utils/consts';
import IconBolt from '../IconBolt/IconBolt';
import IconRing from '../IconRing/IconRing';
import Modal from '../Modal/Modal';
import Button from '../UI/Button/Button';
import { ReactComponent as IconAdd } from '../../assets/icons/add.svg';
import { ReactComponent as IconBasketballLight } from '../../assets/icons/basketball-light.svg';
import { ReactComponent as IconBasketball } from '../../assets/icons/basketball.svg';
import { ReactComponent as IconMidnightLight } from '../../assets/icons/midnight-light.svg';
import { ReactComponent as IconMidnight } from '../../assets/icons/midnight.svg';

const TrackingCards = () => {
  const { theme } = useTheme();
  
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  
  const closeModal = () => setIsModalOpen(false);

  const basketballIcon = theme === DARK_THEME ? <IconBasketball /> : <IconBasketballLight />;
  
  const midnightIcon = theme === DARK_THEME ? <IconMidnight /> : <IconMidnightLight />;

  // toDo: Вынести в моки
  const activityCards = [
    {
      icon: <IconRing percentage={75} color="#5FF042" />,
      title: "Питание",
      unit: "ккал",
      score: 1200
    }, {
      icon: <IconRing percentage={50} color="#1AB3FF" />,
      title: "Жидкость",
      unit: "ккал",
      score: 800
    }, {
      icon: <IconBolt percentage={60} color="#FFCC00" />,
      title: "Шаги",
      unit: "с Garmin",
      score: 2400
    }
  ];

  return (
    <div className="px-[15px] pt-6">
      <div className="grid grid-cols-3 gap-x-1 mb-2">
        {activityCards.map((item, index) => {
          return (
            <div className="grid grid-cols-1 dark:bg-[#FFFFFF]/[0.04] bg-[#FFFFFF] p-1.5 rounded-lg dark:text-[#FFFFFF] text-[#444444] text-center" key={index}>
              <div className='mb-8'>
                {item.icon}
              </div>

              <div className='flex flex-col justify-start text-left mb-2'>
                <p className='text-xs font-normal leading-[14px] dark:text-[#FFFFFF] text-[#444444]'>{item.title}</p>
                
                <p className='text-xs font-normal leading-[14px] dark:text-[#FFFFFF]/[.32] text-[#444444]/[.56]'>{item.unit}</p>
              </div>

              <div className='flex justify-between items-center'>
                <p className="text-base leading-4 text-left">{item.score}</p>
                
                <button onClick={openModal} className="flex justify-center items-center size-6 dark:bg-[#384D00] bg-[#BBFF00] rounded-lg text-[#BBFF00] hover:brightness-105 active:brightness-95 active:scale-95">
                  <IconAdd className='size-4 fill-[#599900]' />
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-2 grid-rows-1 gap-x-2">

        <button className="card dark:bg-[#FFFFFF]/[0.04] bg-[#FFFFFF] p-4 rounded-lg dark:text-[#FFFFFF] text-[#444444] text-center hover:brightness-105 active:brightness-95 active:scale-95">
          <div className='flex justify-start items-center gap-x-2.5'>
            <div>
              {basketballIcon}
            </div>
            
            <p className='text-xs leading-[14px] font-normal'>Тренировка</p>
          </div>
        </button>

        <button className="card dark:bg-[#FFFFFF]/[0.04] bg-[#FFFFFF] p-4 rounded-lg dark:text-[#FFFFFF] text-[#444444] text-center hover:brightness-105 active:brightness-95 active:scale-95">
          <div className='flex justify-start items-center gap-x-2.5'>
            <div>
              {midnightIcon}
            </div>
            
            <p className='text-xs leading-[14px] font-normal'>Отдых</p>
          </div>
        </button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2 className="text-base font-medium leading-[18px] text-[#FFFFFF] mb-4">Добавить данные</h2>
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

export default TrackingCards;
