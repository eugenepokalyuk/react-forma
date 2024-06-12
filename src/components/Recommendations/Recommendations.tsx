import { ReactComponent as ImageChart } from '../../assets/icons/chart.svg';
import { ReactComponent as IconMoon } from '../../assets/icons/moon.svg';
import Button from '../UI/Button/Button';

import ImageFood from '../../assets/images/food.png';


const Recommendations = () => {
    return (
        <div className="px-[15px] pt-6">
            <div className="w-[138px] mb-6">
                <h1 className="text-xl leading-6 font-medium dark:text-[#FFFFFF] text-[#444444]">Персональные рекомендации</h1>
            </div>

            <div className='space-y-1'>
                <div className="grid grid-cols-2 gap-1">
                    <div className="dark:bg-[#FFFFFF]/[0.04] bg-[#FFFFFF] dark:text-[#FFFFFF] text-[#444444] row-span-2 p-3 rounded-xl space-y-4 flex flex-col justify-between">
                        <div>
                            <div className='mb-4'>
                                <IconMoon />
                            </div>

                            <div className='space-y-1.5'>
                                <p className="text-base leading-[18px] font-medium">Последнюю неделю <span className="text-[#A35BFF]">вы мало спите</span></p>
                                <p className='text-[#FFFFFF]/[.32] text-xs font-normal leading-[14px]'>в среднем 6 часов 50 минут</p>
                            </div>
                        </div>

                        <Button variant="gray">Наладить сон</Button>
                    </div>

                    <div className="dark:bg-[#FFFFFF]/[0.04] bg-[#FFFFFF] dark:text-[#FFFFFF] text-[#444444] rounded-xl">
                        <div className='p-3'>
                            <h3 className="text-sm leading-4 font-medium">Ваш прогресс за прошлую неделю</h3>
                        </div>

                        <div className='flex justify-end'>
                            <ImageChart className='rounded-br-xl' />
                        </div>
                    </div>

                    <button className="bg-gradient-to-b from-[#E48027] to-[#E53E2E] rounded-full aspect-square text-white w-full text-sm font-normal leading-4 text-center p-3 hover:brightness-105 active:brightness-95 active:scale-95">
                        <p className='text-[50px] font-extralight leading-10 mb-1.5'>10</p>
                        <p>упражнений <span className='whitespace-nowrap'>для офиса</span></p>
                    </button>
                </div>

                <div className="relative flex flex-col justify-between items-start min-h-44 dark:bg-[#FFFFFF]/[0.04] bg-[#FFFFFF] dark:text-white text-[#444444] p-3 rounded-xl overflow-hidden">
                    <div className='absolute -bottom-10 -right-10'>
                        <img src={ImageFood} className='size-36' alt="рамен" />
                    </div>

                    <div className='w-[200px] space-y-1.5'>
                        <h2 className='dark:text-[#FFFFFF] text-[#444444] text-base leading-[18px] font-medium'>Рецепты для похудения на основе ваших предпочтений</h2>
                        <p className='dark:text-[#FFFFFF]/[.32] text-[#444444]/[.56] text-xs font-normal leading-[14px]'>Рецепты курируются диетологами</p>
                    </div>
                    <Button variant="green">Смотреть</Button>
                </div>
            </div>
        </div>
    );
};

export default Recommendations;