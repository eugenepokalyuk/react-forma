import IconAdd from '../../assets/icons/add.svg';
import IconBasketball from '../../assets/icons/basketball.svg';
import IconBolt from '../../assets/icons/bolt.svg';
import IconMidnight from '../../assets/icons/midnight.svg';
import IconRing from '../../assets/icons/ring.svg';

const TrackingCards = () => {

  const activityCards = [
    {
      imageUrl: IconRing,
      title: "Питание",
      unit: "ккал",
      score: 1200
    }, {
      imageUrl: IconRing,
      title: "Жидкость",
      unit: "ккал",
      score: 800
    }, {
      imageUrl: IconBolt,
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
            <button className="grid grid-cols-1 bg-[#FFFFFF]/[0.04] p-1.5 rounded-lg text-white text-center" key={index}>
              <div className='mb-8'>
                <img src={item.imageUrl} alt={item.title} />
              </div>

              <div className='flex flex-col justify-start text-left mb-2'>
                <p className='text-xs font-normal leading-[14px] text-[#FFFFFF]'>{item.title}</p>
                <p className='text-xs font-normal leading-[14px] text-[#FFFFFF]/[.32]'>{item.unit}</p>
              </div>

              <div className='flex justify-between items-center'>
                <p className="text-base leading-4 text-left">{item.score}</p>
                <button className="flex justify-center items-center size-6 bg-[#384D00] rounded-lg text-[#BBFF00]">
                  <img src={IconAdd} alt="плюсик" className='size-4' />
                </button>
              </div>
            </button>
          )
        })}
      </div>

      <div className="grid grid-cols-2 grid-rows-1 gap-x-2">

        <button className="card bg-[#FFFFFF]/[0.04] p-4 rounded-lg text-white text-center">
          <div className='flex justify-start items-center gap-x-2.5'>
            <div>
              <img src={IconBasketball} alt="мячик" />
            </div>
            <p className='text-xs leading-[14px] font-normal'>Тренировка</p>
          </div>
        </button>

        <button className="card bg-[#FFFFFF]/[0.04] p-4 rounded-lg text-white text-center">
          <div className='flex justify-start items-center gap-x-2.5'>
            <div>
              <img src={IconMidnight} alt="луна" />
            </div>
            <p className='text-xs leading-[14px] font-normal'>Отдых</p>
          </div>
        </button>

      </div>
    </div>
  );
};

export default TrackingCards;