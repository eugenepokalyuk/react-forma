import { useState } from 'react';
import IconAdd from '../../assets/icons/add.svg';
import IconBasketball from '../../assets/icons/basketball.svg';
import IconMidnight from '../../assets/icons/midnight.svg';
// import IconBolt from '../../assets/icons/bolt.svg';
// import IconRing from '../../assets/icons/ring.svg';
import Button from '../Button/Button';
import IconBolt from '../IconBolt/IconBolt';
import IconRing from '../IconRing/IconRing';
import Modal from '../Modal/Modal';

const TrackingCards = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

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
            <button className="grid grid-cols-1 bg-[#FFFFFF]/[0.04] p-1.5 rounded-lg text-white text-center  hover:brightness-105 active:brightness-95" key={index}>
              <div className='mb-8'>
                {/* <img src={item.imageUrl} alt={item.title} /> */}
                {item.icon}
              </div>

              <div className='flex flex-col justify-start text-left mb-2'>
                <p className='text-xs font-normal leading-[14px] text-[#FFFFFF]'>{item.title}</p>
                <p className='text-xs font-normal leading-[14px] text-[#FFFFFF]/[.32]'>{item.unit}</p>
              </div>

              <div className='flex justify-between items-center'>
                <p className="text-base leading-4 text-left">{item.score}</p>
                <button onClick={openModal} className="flex justify-center items-center size-6 bg-[#384D00] rounded-lg text-[#BBFF00]">
                  <img src={IconAdd} alt="плюсик" className='size-4' />
                </button>
              </div>
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-2 grid-rows-1 gap-x-2">

        <button className="card bg-[#FFFFFF]/[0.04] p-4 rounded-lg text-white text-center  hover:brightness-105 active:brightness-95">
          <div className='flex justify-start items-center gap-x-2.5'>
            <div>
              <img src={IconBasketball} alt="мячик" />
            </div>
            <p className='text-xs leading-[14px] font-normal'>Тренировка</p>
          </div>
        </button>

        <button className="card bg-[#FFFFFF]/[0.04] p-4 rounded-lg text-white text-center  hover:brightness-105 active:brightness-95">
          <div className='flex justify-start items-center gap-x-2.5'>
            <div>
              <img src={IconMidnight} alt="луна" />
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
            <Button variant="orange" onClick={closeModal}>Закрыть</Button>
            <Button variant="green" type="submit">Добавить</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default TrackingCards;