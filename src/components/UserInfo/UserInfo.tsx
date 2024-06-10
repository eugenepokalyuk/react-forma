import HeroExperian from '../../assets/icons/hero-experian.svg';
import HeroStar from '../../assets/icons/star.svg';
import HeroProfile from '../../assets/icons/user.svg';

const UserInfo = () => {
    return (
        <div className="p-4 text-white rounded-lg">
            <div className="flex items-center justify-between space-x-2 mb-12">
                <div className="flex items-center">
                    <div className="relative text-xl font-bold size-[32px]">
                        <img className='size-full' src={HeroExperian} alt="" />
                        <h3 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center size-full text-[#000000] text-sm -tracking-widest'>3</h3>
                    </div>
                </div>

                <div className="flex items-center justify-start flex-1 bg-[#FFFFFF]/[.08] p-1 rounded-full">
                    <div className="bg-gradient-to-r from-[#BBFF00] to-[#FF8A01] h-3.5 rounded-full" style={{ width: '40%' }}></div>
                </div>

                <div className="flex items-center space-x-2">
                    <button className="text-white bg-[#FFFFFF] bg-opacity-[0.08] size-[32px] rounded-full">
                        <img className='size-full' src={HeroStar} alt="" />
                    </button>
                    <button className="text-white bg-[#FFFFFF] bg-opacity-[0.08] size-[32px] rounded-full">
                        <img className='size-full' src={HeroProfile} alt="" />
                    </button>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center w-full'>
                <div className="flex justify-center items-center mb-4">
                    <button className="uppercase font-normal rounded-full border border-[#FFFFFF]/[.2] text-[#FFFFFF] tracking-widest h-6 text-xs px-3">
                        ЦЕЛЬ — ПОХУДЕТЬ ДО 96 КГ
                    </button>
                </div>

                <div className='flex flex-col justify-center items-center text-center w-[226px] space-y-2'>
                    <h1 className="text-[28px] leading-7 font-normal">План на сегодня выполнен на 40%</h1>
                    <p className="text-sm leading-[18px] font-normal text-[#FFFFFF]/[.56]">План обновляется каждый день исходя из вашей активности</p>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;